<p {!! $wrapperAttributes !!}>
	@if (filled($attributes['suffix']))
		<span class="{{ $blockClass }}__greeting">{{ $greeting }},</span>
		<span class="{{ $blockClass }}__suffix">{{ $attributes['suffix'] }}</span>
	@else
		<span class="{{ $blockClass }}__greeting">{{ $greeting }}</span>
	@endif
</p>
