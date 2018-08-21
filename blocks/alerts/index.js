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
const { RichText } = wp.editor;

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
		}
	},
	edit: props => {
		const {
			attributes: { message },
			className,
			setAttributes
		} = props;
		const onChangeMessage = message => {
			setAttributes({ message });
		};
		return (
			<div className={className}>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__("Crea il tuo avviso...", "sam-gutenberg")}
					onChange={onChangeMessage}
					value={message}
				/>
			</div>
		);
	},
	save: props => {
		const {
			attributes: { message }
		} = props;
		return (
			<div class="info">
				<div class="message-body box-inside">{message}</div>
			</div>
		);
	}
});
