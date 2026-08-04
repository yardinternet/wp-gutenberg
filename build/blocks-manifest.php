<?php
// This file is generated. Do not modify it manually.
return array(
	'collapse' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/collapse',
		'version' => '0.1.0',
		'title' => 'Uitklap',
		'category' => 'yard',
		'description' => 'Voeg uitklapbare blokken toe om inhoud in en uit te kunnen vouwen.',
		'attributes' => array(
			'hasStructuredData' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'showMultiple' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'contentRole' => true,
			'listView' => true,
			'html' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./frontend.js'
	),
	'collapse-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/collapse-item',
		'version' => '0.2.0',
		'title' => 'Uitklap item',
		'category' => 'yard',
		'description' => 'Uitklapbaar component.',
		'attributes' => array(
			'hasStructuredData' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'headingText' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'icon' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconAltText' => array(
				'type' => 'string',
				'default' => ''
			),
			'isOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'anchor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hasSubtitle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'subtitleText' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'parent' => array(
			'yard/collapse'
		),
		'supports' => array(
			'anchor' => true,
			'html' => false,
			'reusable' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'counting-number' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/counting-number',
		'version' => '0.0.2',
		'title' => 'Oplopende teller',
		'category' => 'yard',
		'description' => 'Toont een oplopende cijfer.',
		'attributes' => array(
			'number' => array(
				'type' => 'string',
				'default' => '100'
			),
			'numberPrefix' => array(
				'type' => 'string'
			),
			'numberSuffix' => array(
				'type' => 'string'
			),
			'hasThousandsSeparator' => array(
				'type' => 'boolean',
				'default' => false
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 2.5
			)
		),
		'supports' => array(
			'align' => true,
			'color' => array(
				'background' => true,
				'color' => true
			),
			'contentRole' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./frontend.js'
	),
	'facetwp' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/facetwp',
		'version' => '0.1.0',
		'title' => 'FacetWP',
		'category' => 'yard',
		'description' => 'Plaats filtering op de pagina.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'selectedFacets' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'selectedTemplate' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'align' => array(
				'type' => 'string',
				'default' => 'wide'
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'icon' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/icon',
		'version' => '0.1.0',
		'title' => 'Icoon',
		'category' => 'yard',
		'description' => 'Voeg een Font Awesome icoon toe.',
		'supports' => array(
			'align' => true,
			'ariaLabel' => true,
			'color' => array(
				'background' => true,
				'color' => true
			),
			'contentRole' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-classic fa-light fa-envelope'
			),
			'iconAltText' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'iconlist' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/iconlist',
		'version' => '0.1.1',
		'title' => 'Iconenlijst',
		'category' => 'yard',
		'description' => 'Voeg een lijst met Font Awesome iconen toe. Verander de tekst en iconen afzonderlijk van elkaar.',
		'attributes' => array(
			'useLinkComponent' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'contentRole' => true,
			'html' => false,
			'layout' => array(
				'default' => array(
					'type' => 'flex',
					'orientation' => 'vertical'
				),
				'allowVerticalAlignment' => false
			),
			'listView' => true
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'iconlist-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/iconlist-item',
		'version' => '0.1.1',
		'title' => 'Iconenlijst item',
		'category' => 'yard',
		'description' => 'Een enkele iconenlijst item.',
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-classic fa-light fa-envelope',
				'role' => 'content'
			),
			'iconAltText' => array(
				'type' => 'string',
				'default' => ''
			),
			'listText' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'opensInNewTab' => array(
				'type' => 'boolean',
				'default' => false,
				'role' => 'content'
			)
		),
		'parent' => array(
			'yard/iconlist'
		),
		'supports' => array(
			'align' => false,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'reusable' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'slide' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/slide',
		'version' => '0.1.0',
		'title' => 'Slide',
		'category' => 'yard',
		'description' => 'Een enkele slide binnen een slider blok.',
		'attributes' => array(
			
		),
		'parent' => array(
			'yard/slider'
		),
		'supports' => array(
			'contentRole' => true,
			'html' => false,
			'reusable' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/slider',
		'version' => '0.1.0',
		'title' => 'Slider',
		'category' => 'yard',
		'description' => 'Voeg slider toe.',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'wide'
			),
			'activeSlide' => array(
				'type' => 'string',
				'default' => null
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'contentRole' => true,
			'html' => false,
			'listView' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'table-of-contents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/table-of-contents',
		'version' => '0.1.0',
		'title' => 'Inhoudsopgave',
		'category' => 'yard',
		'description' => 'Toont een inhoudsopgave op basis van de koppen op de pagina.',
		'supports' => array(
			'html' => false,
			'multiple' => false,
			'reusable' => false
		),
		'attributes' => array(
			'includeSubheading' => array(
				'type' => 'boolean',
				'default' => true
			),
			'contentSelector' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingSelector' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'tabs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/tabs',
		'version' => '0.1.1',
		'title' => 'Tabbladen',
		'category' => 'yard',
		'description' => 'Groepeer gemakkelijk content in verschillende tabbladen.',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'wide'
			),
			'currentTab' => array(
				'type' => 'string'
			),
			'defaultTab' => array(
				'type' => 'string'
			),
			'defaultTabEnabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'contentRole' => true,
			'listView' => true
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./frontend.js',
		'style' => 'file:./style-index.css'
	),
	'tabs-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/tabs-item',
		'version' => '0.1.1',
		'title' => 'Tabblad',
		'category' => 'yard',
		'description' => 'Tabblad item.',
		'attributes' => array(
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'headingText' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'icon' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconAltText' => array(
				'type' => 'string',
				'default' => ''
			),
			'id' => array(
				'type' => 'string'
			)
		),
		'parent' => array(
			'yard/tabs'
		),
		'supports' => array(
			'anchor' => true,
			'contentRole' => true,
			'html' => false,
			'reusable' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'timeline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/timeline',
		'version' => '0.2.0',
		'title' => 'Tijdlijn',
		'category' => 'yard',
		'description' => 'Creeërt een tijdlijn wrapper waarbij elk blokje een nieuwe stap is.',
		'attributes' => array(
			'isOrderedList' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			)
		),
		'supports' => array(
			'align' => array(
				'wide'
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'contentRole' => true,
			'html' => false,
			'listView' => true
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'timeline-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/timeline-item',
		'version' => '0.1.0',
		'title' => 'Tijdlijn item',
		'category' => 'yard',
		'description' => 'Een nieuwe stap van de tijdlijn.',
		'parent' => array(
			'yard/timeline'
		),
		'attributes' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => true,
				'text' => true
			),
			'contentRole' => true,
			'html' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js'
	),
	'timeline-item-collapse' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yard/timeline-item-collapse',
		'version' => '0.1.0',
		'title' => 'Tijdlijn item uitklapbaar',
		'category' => 'yard',
		'description' => 'Een nieuwe uitklapbare stap van de tijdlijn.',
		'parent' => array(
			'yard/timeline'
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-yard-timeline-item-collapse__title',
				'role' => 'content'
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'subtitle' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-yard-timeline-item-collapse__subtitle',
				'role' => 'content'
			),
			'isOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hasInnerBlocks' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'color' => array(
				'background' => true,
				'text' => true
			),
			'html' => false
		),
		'textdomain' => 'yard',
		'editorScript' => 'file:./index.js'
	)
);
