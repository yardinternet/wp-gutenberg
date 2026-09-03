<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks;

/**
 * Renders a Blade template through the view engine provided by the host theme.
 *
 * This plugin ships no view engine of its own: it borrows the one a Sage/Acorn
 * theme already boots, the same way `Blocks\facetwp\Facetwp` does. Templates are
 * rendered by absolute path via `Illuminate\View\Factory::file()`, so the plugin
 * doesn't have to register view paths or a view namespace with the theme.
 */
class BladeRenderer
{
	/**
	 * Templates already reported as unrenderable, so a page full of broken
	 * blocks logs one notice per template instead of one per block instance.
	 *
	 * @var array<string, true>
	 */
	private static $reported = [];

	/**
	 * Render a Blade template.
	 *
	 * @param string               $templatePath Absolute path to a `.blade.php` file.
	 * @param array<string, mixed> $data         Variables made available to the template.
	 */
	public function render(string $templatePath, array $data = []): string
	{
		if (! file_exists($templatePath)) {
			return $this->fallback($templatePath, sprintf('The Blade template "%s" does not exist.', $templatePath));
		}

		$factory = $this->viewFactory();

		if (null === $factory) {
			return $this->fallback($templatePath, 'No Blade view engine is available. PHP-only blocks are rendered through the view engine of a Sage/Acorn theme.');
		}

		return (string) $factory->file($templatePath, $data);
	}

	/**
	 * Resolve the theme's view factory, or null when there isn't one.
	 *
	 * `app()` is Acorn's own global helper, `Roots\app()` its deprecated
	 * predecessor, and `view()` without arguments returns the factory in both
	 * Acorn and Laravel. Resolving from the container can throw when the view
	 * service provider was never registered, hence the try/catch.
	 *
	 * @return object|null An `Illuminate\View\Factory`-like object.
	 */
	private function viewFactory(): ?object
	{
		foreach (['app', 'Roots\\app'] as $container) {
			if (! function_exists($container)) {
				continue;
			}

			try {
				$factory = $container('view');
			} catch (\Throwable $e) {
				continue;
			}

			if ($this->isViewFactory($factory)) {
				return $factory;
			}
		}

		if (function_exists('view')) {
			try {
				$factory = \view();
			} catch (\Throwable $e) {
				return null;
			}

			if ($this->isViewFactory($factory)) {
				return $factory;
			}
		}

		return null;
	}

	/**
	 * @param mixed $factory
	 */
	private function isViewFactory($factory): bool
	{
		return is_object($factory) && method_exists($factory, 'file');
	}

	/**
	 * Handle a template that can't be rendered.
	 *
	 * The editor previews these blocks over the REST block-renderer endpoint, so
	 * there we return a visible hint. On the front end we stay silent: a theme
	 * without a view engine shouldn't leak diagnostics to visitors.
	 */
	private function fallback(string $templatePath, string $message): string
	{
		if (! isset(self::$reported[$templatePath])) {
			self::$reported[$templatePath] = true;

			\_doing_it_wrong(__METHOD__, \esc_html($message), '1.8.0');
		}

		if (defined('REST_REQUEST') && REST_REQUEST) {
			return '<p>' . \esc_html__('Dit blok kan niet worden weergegeven: er is geen Blade-templateengine beschikbaar.', 'yard-gutenberg') . '</p>';
		}

		return '';
	}
}
