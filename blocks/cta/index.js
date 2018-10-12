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
const {
	PanelColor,
	RangeControl,
	PanelBody,
	PanelRow,
	TextControl
} = wp.components;
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
			source: "text",
			selector: ".cta-message"
		},
		btnMessage: {
			source: "text",
			selector: ".cta-btn"
		},
		backgroundBoxColor: {
			type: "string",
			default: "#333333"
		},
		textBoxColor: {
			type: "string",
			default: "#ffffff"
		},
		buttonBackgroundColor: {
			type: "string",
			default: "#d32f2f"
		},
		buttonTextColor: {
			type: "string",
			default: "#E0E0E0"
		},
		borderBoxRadius: {
			type: "number",
			default: "10"
		},
		borderBtnRadius: {
			type: "number",
			default: "6"
		},
		urlBtn: {
			type: "string"
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
				buttonTextColor,
				borderBoxRadius,
				urlBtn
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
				<PanelBody title={__("Bordi", "sam-gutenberg")}>
					<PanelRow>
						<RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label="Angoli Arrotondati Box"
							value={borderBoxRadius}
							onChange={borderBoxRadius =>
								setAttributes({ borderBoxRadius })
							}
						/>
					</PanelRow>
					{/* <PanelRow>
						<RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label="Angoli Arrotondati Bottone"
							value={borderBtnRadius}
							onChange={borderBtnRadius =>
								setAttributes({ borderBtnRadius })
							}
						/>
					</PanelRow> */}
				</PanelBody>
				<PanelBody
					title={__("Link URL", "sam-gutenberg")}
					initialOpen={false}
				>
					<TextControl
						label={__("URL", "sam-gutenberg")}
						help={__(
							"Inserisci la URL per il bottone",
							"sam-gutenberg"
						)}
						value={urlBtn}
						onChange={urlBtn => setAttributes({ urlBtn })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Colori", "sam-gutenberg")}
					initialOpen={false}
				>
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
						title={__("Colore Titolo CTA", "sam-gutenberg")}
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
				</PanelBody>
			</InspectorControls>,
			<div
				className={className}
				style={{
					backgroundColor: backgroundBoxColor,
					borderRadius: `${borderBoxRadius}px`
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
					tagName="p"
					className="cta-message"
					placeholder={__("Aggiungi un messaggio", "sam-gutenberg")}
					style={{
						color: textBoxColor
					}}
					onChange={onChangeMessage}
					value={ctaMessage}
				/>
				<div class="wrapper-cta-btn">
					<RichText
						tagName="span"
						className="cta-btn"
						placeholder={__("Azione!", "sam-gutenberg")}
						onChange={onChangeBtnText}
						style={{
							backgroundColor: buttonBackgroundColor,
							color: buttonTextColor,
							borderRadius: `${borderBoxRadius}px`
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
				ctaTitle,
				ctaMessage,
				btnMessage,
				backgroundBoxColor,
				textBoxColor,
				buttonBackgroundColor,
				buttonTextColor,
				borderBoxRadius,
				urlBtn
			},
			className
		} = props;
		return (
			<div
				className={className}
				style={{
					backgroundColor: backgroundBoxColor,
					borderRadius: `${borderBoxRadius}px`,
					color: textBoxColor
				}}
			>
				<h2
					className="cta-title"
					style={{
						color: textBoxColor
					}}
				>
					{ctaTitle}
				</h2>
				<p className="cta-message">{ctaMessage}</p>
				<div className="wrapper-cta-btn">
					<a
						className="cta-btn"
						href={urlBtn}
						style={{
							backgroundColor: buttonBackgroundColor,
							color: buttonTextColor,
							borderRadius: `${borderBoxRadius}px`
						}}
					>
						{btnMessage}
					</a>
				</div>
			</div>
		);
	}
});
