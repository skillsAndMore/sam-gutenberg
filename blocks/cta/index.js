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
export default registerBlockType("sam-gutenberg/cta", {
	title: __("SAM Call to Action", "sam-gutenberg"),
	description: __(
		"Utile blocco per la creazione di una Call to Action da inserire nella pagina",
		"sam-gutenberg"
	),
	category: "common",
	icon: {
		src: icon
	},
	keywords: [__("SAM CTA", "sam-gutenberg"), __("CTA", "sam-gutenberg")],
	attributes: {
		ctaTitle: {
			source: "text",
			selector: ".cta-title"
		},
		ctaMessage: {
			type: "array",
			source: "children",
			selector: ".cta-message"
		},
		btnMessage: {
			source: "text",
			selector: ".cta-btn"
		},
		backgroundBoxColor: {
			type: "string",
			default: "#5e4352"
		},
		textBoxColor: {
			type: "string",
			default: "#dfbbb1"
		},
		buttonBackgroundColor: {
			type: "string",
			default: "#e43f6f"
		},
		buttonTextColor: {
			type: "string",
			default: "#dfbbb1"
		}
	},
	edit: props => {
		const {
			attributes: {
				ctaTitle,
				ctaMessage,
				btnMessage,
				backgroundBoxColor,
				textBoxColor,
				buttonBackgroundColor,
				buttonTextColor
			},
			className,
			setAttributes
		} = props;
		const onChangeTitle = ctaTitle => {
			setAttributes({ ctaTitle });
		};
		const onChangeMessage = ctaMessage => {
			setAttributes({ ctaMessage });
		};
		const onChangeBtnText = btnMessage => {
			setAttributes({ btnMessage });
		};
		return [
			<InspectorControls>
				<PanelColor //Colore Sfondo CTA
					title={__("Colore Sfondo CTA", "sam-gutenberg")}
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
				<PanelColor //Colore Testo CTA
					title={__("Colore Testo CTA", "sam-gutenberg")}
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
				<PanelColor //Colore Sfondo BTN
					title={__("Colore Sfondo Bottone", "sam-gutenberg")}
					colorValue={buttonBackgroundColor}
					initialOpen={false}
				>
					<ColorPalette
						value={buttonBackgroundColor}
						onChange={buttonBackgroundColor =>
							setAttributes({ buttonBackgroundColor })
						}
					/>
				</PanelColor>
				<PanelColor //Colore Testo BTN
					title={__("Colore Testo Bottone", "sam-gutenberg")}
					colorValue={buttonTextColor}
					initialOpen={false}
				>
					<ColorPalette
						value={buttonTextColor}
						onChange={buttonTextColor =>
							setAttributes({ buttonTextColor })
						}
					/>
				</PanelColor>
			</InspectorControls>,
			<div
				className={className}
				style={{
					backgroundColor: backgroundBoxColor
				}}
			>
				<RichText
					tagName="h2"
					className="cta-title"
					placeholder="Title"
					style={{
						color: textBoxColor
					}}
					onChange={onChangeTitle}
					value={ctaTitle}
				/>
				<RichText
					tagName="div"
					className="cta-message"
					multiline="p"
					placeholder={__("Aggiungi un messaggio", "sam-gutenberg")}
					style={{
						color: textBoxColor
					}}
					onChange={onChangeMessage}
					value={ctaMessage}
				/>
				<div class="cta-btn">
					<RichText
						tagName="span"
						className="cta-btn"
						placeholder={__("Azione!", "sam-gutenberg")}
						onChange={onChangeBtnText}
						style={{
							backgroundColor: buttonBackgroundColor,
							color: buttonTextColor
						}}
						value={btnMessage}
					/>
				</div>
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
