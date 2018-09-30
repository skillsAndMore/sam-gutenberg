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
export default registerBlockType("sam-gutenberg/newsletter-box", {
	title: __("SAM Newsletter Box", "sam-gutenberg"),
	description: __(
		"Grazie a questo blocco puoi inserire qualsiasi modulo di iscrizione newsletter.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [
		__("SAM Newsletter Box", "sam-gutenberg"),
		__("Newsletter Box", "sam-gutenberg")
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
