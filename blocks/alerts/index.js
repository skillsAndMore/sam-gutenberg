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
export default registerBlockType("sam-gutenberg/alert-box", {
	title: __("SAM Custom Alert Box", "sam-gutenberg"),
	description: __(
		"Semplice Alert Box che permette di mostrare un messaggio di chiarimento all'interno del contenuto.",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [__("SAM AB", "sam-gutenberg"), __("Alert Box", "sam-gutenberg")],
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
		backgroundBoxColor: {
			type: "string",
			default: "#FFFFFF"
		},
		textBoxColor: {
			type: "string",
			default: "#000000"
		},
		mainColorAlert: {
			type: "string",
			default: "#FF0000"
		},
		labelColor: {
			type: "string",
			default: "#FFFFFF"
		}
	},
	edit: props => {
		const {
			attributes: {
				message,
				label,
				backgroundBoxColor,
				textBoxColor,
				mainColorAlert,
				labelColor
			},
			className,
			setAttributes
		} = props;
		const onChangeMessage = message => {
			setAttributes({ message });
		};
		const onChangeLabel = label => {
			setAttributes({ label });
		};
		return [
			<InspectorControls>
				<PanelColor
					title={__("Colore Sfondo Box", "sam-gutenberg")}
					colorValue={backgroundBoxColor}
					initialOpen={false}
				>
					<ColorPalette
						value={backgroundBoxColor}
						onChange={backgroundBoxColor =>
							setAttributes({ backgroundBoxColor })
						}
					/>
				</PanelColor>
				<PanelColor
					title={__("Colore Testo Box", "sam-gutenberg")}
					colorValue={textBoxColor}
					initialOpen={false}
				>
					<ColorPalette
						value={textBoxColor}
						onChange={textBoxColor =>
							setAttributes({ textBoxColor })
						}
					/>
				</PanelColor>
				<PanelColor
					title={__("Colore Principale", "sam-gutenberg")}
					colorValue={mainColorAlert}
					initialOpen={false}
				>
					<ColorPalette
						value={mainColorAlert}
						onChange={mainColorAlert =>
							setAttributes({ mainColorAlert })
						}
					/>
				</PanelColor>
				<PanelColor
					title={__("Colore Label", "sam-gutenberg")}
					colorValue={labelColor}
					initialOpen={false}
				>
					<ColorPalette
						value={labelColor}
						onChange={labelColor => setAttributes({ labelColor })}
					/>
				</PanelColor>
			</InspectorControls>,
			<div
				className={className}
				style={{
					backgroundColor: backgroundBoxColor,
					borderColor: mainColorAlert
				}}
			>
				<RichText
					tagName="div"
					className="label"
					placeholder="Label"
					style={{
						color: labelColor,
						backgroundColor: mainColorAlert
					}}
					onChange={onChangeLabel}
					value={label}
				/>
				<RichText
					tagName="div"
					className="message-body"
					style={{ color: textBoxColor }}
					multiline="p"
					placeholder={__("Add your custom message", "sam-gutenberg")}
					onChange={onChangeMessage}
					value={message}
				/>
			</div>
		];
	},
	save: props => {
		const {
			attributes: {
				message,
				label,
				backgroundBoxColor,
				textBoxColor,
				mainColorAlert,
				labelColor
			},
			className
		} = props;
		return (
			<div
				className={className}
				style={{
					backgroundColor: backgroundBoxColor,
					borderColor: mainColorAlert
				}}
			>
				<span
					class="label"
					style={{
						backgroundColor: mainColorAlert,
						color: labelColor
					}}
				>
					{label}
				</span>
				<div class="message-body" style={{ color: textBoxColor }}>
					{message}
				</div>
			</div>
		);
	}
});
