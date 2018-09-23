/**
 * Block dependencies
 */
import icon from "./icon";
import "./style.scss";
import "./editor.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PanelBody, PanelRow, PanelColor } = wp.components;
const { RichText, PlainText, InspectorControls, ColorPalette } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("sam/alert", {
	title: __("Alert Box", "sam-gutenberg"),
	description: __("Un semplice alert box.", "sam-gutenberg"),
	category: "common",
	icon: {
		//   background: 'rgba(254, 243, 224, 0.52)',
		src: icon
	},
	keywords: [
		__("Alert", "sam-gutenberg"),
		__("Message", "sam-gutenberg"),
		__("Shout Out", "sam-gutenberg")
	],
	attributes: {
		message: {
			type: "array",
			source: "children",
			selector: ".message-body"
		},
		label: {
			source: "text",
			selector: ".label"
		},
		colorPaletteControl: {
			type: "string",
			default: "#000000"
		}
	},
	edit: props => {
		const {
			attributes: { message, label, colorPaletteControl },
			className,
			setAttributes
		} = props;
		const onChangeMessage = message => {
			setAttributes({ message });
		};
		const onChangeLabel = label => {
			setAttributes({ label });
		};
		return (
			<InspectorControls>
				<PanelColor
					title={__("Colore Principale", "sam-gutenberg")}
					colorValue={colorPaletteControl}
				>
					<ColorPalette
						value={colorPaletteControl}
						onChange={colorPaletteControl =>
							setAttributes({ colorPaletteControl })
						}
					/>
				</PanelColor>
			</InspectorControls> ,
			<div className={className}>
				<PlainText
					tagName="div"
					className="label"
					placeholder="Label"
					onChange={onChangeLabel}
					value={label}
				/>
				<RichText
					tagName="div"
					className="body-message"
					multiline="p"
					placeholder={__(
						"Crea il tuo avviso...",
						"sam-gutenberg"
					)}
					onChange={onChangeMessage}
					value={message}
				/>
			</div>
		);
	},
	save: props => {
		const {
			attributes: { message, label }
		} = props;
		return (
			<div class="info">
				<span class="label">{label}</span>
				<div class="message-body box-inside">{message}</div>
			</div>
		);
	}
});
