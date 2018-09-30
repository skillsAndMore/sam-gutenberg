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
export default registerBlockType("sam-gutenberg/code", {
	title: __("SAM CodePen", "sam-gutenberg"),
	description: __(
		"Blocco che permette un corretto embed dei CodePen realizzati.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM CodePen", "sam-gutenberg"),
		__("CodePen", "sam-gutenberg")
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
