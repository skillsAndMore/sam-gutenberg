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
const { RichText, InspectorControls, ColorPalette } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("sam-gutenberg/accordion", {
	title: __("SAM Accordion", "sam-gutenberg"),
	description: __(
		"Blocco accordion per riassumere all'interno di un articolo un maggior numero di informazioni.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM Accordion", "sam-gutenberg"),
		__("Accordion", "sam-gutenberg")
	],
	attributes: {},
	edit: props => {
		const { attributes, className, setAttributes } = props;

		return;
	},
	save: props => {
		const { attributes, className } = props;
		return;
	}
});
