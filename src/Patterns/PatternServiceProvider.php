<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Patterns;

class PatternServiceProvider
{
    public function boot()
    {
        \add_action('init', [new PatternPostType(), 'boot']);
        \add_action('admin_init', [$this, 'registerAsBlockPatterns']);
        \add_action('after_setup_theme', [$this, 'removeCoreBlockPatterns']);
    }

    /**
     * Registers the yard-pattern custom post type as block patterns.
     */
    public function registerAsBlockPatterns(): void
    {
        $enablePatterns = apply_filters('yard-gutenberg/enablePatterns', true);

        if (! $enablePatterns) {
            return;
        }

        $this->registerTermsAsCategories();
        $this->registerPostsAsBlockPatterns();
    }

    /**
     * Retrieves terms from the 'yard-pattern-category' taxonomy and registers them as block pattern categories.
     */
    private function registerTermsAsCategories(): void
    {
        $terms = get_terms('yard-pattern-category', ['orderby' => 'name', 'order' => 'asc', 'hide_empty' => true]);

        if (empty($terms) || is_wp_error($terms)) {
            return;
        }

        foreach($terms as $term) {
            register_block_pattern_category(
                $term->slug,
                ['label' => $term->name]
            );
        }
    }

    /**
     * Retrieves pattern posts and registers them as block patterns. The 'pageCreationCategory' is used to
     * determine whether the pattern should be registered for the page creation modal.
     */
    private function registerPostsAsBlockPatterns(): void
    {
        $pageCreationCategory   = apply_filters('yard-gutenberg/pageCreationCategory', 'paginas');
        $patternPosts           = $this->getPatternPosts();

        foreach ($patternPosts as $pattern) {
            $terms     = get_the_terms($pattern->ID, 'yard-pattern-category');
            $termSlugs = $terms ? array_map(fn ($term) => $term->slug, $terms) : [];

            $blockTypes = in_array($pageCreationCategory, $termSlugs) ? ['core/post-content'] : [];

            register_block_pattern(
                'yard-gutenberg/' . $pattern->post_name,
                [
                    'title'      => $pattern->post_title,
                    'content'    => $pattern->post_content,
                    'categories' => $termSlugs,
                    'blockTypes' => $blockTypes,
                ]
            );
        }
    }

    /**
     * Get all pattern posts.
     */
    private function getPatternPosts(): array
    {
        $patternPosts = get_posts([
            'post_type'      => 'yard-pattern',
            'order'          => 'ASC',
            'order_by'       => 'post_title',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
        ]);

        return $patternPosts;
    }

    /**
     * Remove core block patterns.
     */
    public function removeCoreBlockPatterns(): void
    {
        remove_theme_support('core-block-patterns');
    }
}
