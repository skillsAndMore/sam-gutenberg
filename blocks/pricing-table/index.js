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
export default registerBlockType("sam-gutenberg/pricing-table", {
	title: __("SAM Pricing Table", "sam-gutenberg"),
	description: __(
		"Permette di creare una pricing table utile per qualsiasi utilizzo.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM Pricing Table", "sam-gutenberg"),
		__("Pricing Table", "sam-gutenberg")
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
