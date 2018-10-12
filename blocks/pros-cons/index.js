/**
 * Block dependencies
 */
import icon from "./icon";
import "./style.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PanelColor } = wp.components;
const { RichText, InspectorControls, ColorPalette, InnerBlocks } = wp.editor;

const TEMPLATE = [
	[
		"core/columns",
		{},
		[
			[
				"core/column",
				{},
				[
					["core/image", { className: "pro-icon" }],
					[
						"core/heading",
						{ placeholder: "Pro Title", className: "pro-title" }
					],
					["core/list", { className: "pro-list" }]
				]
			],
			[
				"core/column",
				{},
				[
					["core/image", { className: "cons-icon" }],
					[
						"core/heading",
						{ placeholder: "Cons Title", className: "cons-title" }
					],
					["core/list", { className: "cons-list" }]
				]
			]
		]
	]
];
/**
 * Register block
 */
export default registerBlockType("sam-gutenberg/pros-cons", {
	title: __("SAM Pros & Cons", "sam-gutenberg"),
	description: __(
		"Semplice blocco per la creazione di tabelle pro e contro con i quale spiegare meglio i vantaggi e svantaggi del concetto.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM Pros & Cons", "sam-gutenberg"),
		__("Pros & Cons", "sam-gutenberg")
	],
	attributes: {
		proTitle: {
			source: "text",
			selector: ".pro-title"
		},
		proList: {
			source: "text",
			selector: ".pro-list"
		},
		proIcon: {
			source: "attribute",
			selector: ".pro-icon",
			attribute: "src"
		},
		consTitle: {
			source: "text",
			selector: ".cons-title"
		},
		consList: {
			source: "text",
			selector: ".cons-list"
		},
		consIcon: {
			source: "attribute",
			selector: ".cons-icon",
			attribute: "src"
		}
	},
	edit: props => {
		const { attributes, className, setAttributes } = props;
		return (
			<div className={className}>
				<InnerBlocks template={TEMPLATE} templateLock="all" />
			</div>
		);
	},
	save: props => {
		const { attributes, className } = props;
		return;
	}
});
