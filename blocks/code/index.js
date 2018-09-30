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
	title: __("SAM Code Block", "sam-gutenberg"),
	description: __(
		"Blocco codice che usa Prism.js per la colorazione della sintassi.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM Code Block", "sam-gutenberg"),
		__("Code Block", "sam-gutenberg")
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
