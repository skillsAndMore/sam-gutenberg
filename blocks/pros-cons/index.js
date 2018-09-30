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
