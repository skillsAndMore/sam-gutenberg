/**
 * Block dependencies
 */
import classnames from 'classnames';
import icon from './icon';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
    registerBlockType,
} = wp.blocks;
const {
    UrlInput,
} = wp.editor;
const {
    IconButton,
    Tooltip,
    TextControl,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'sam-gutenberg/url-input',
    {
        title: __( 'Example - URL Input', 'sam-gutenberg' ),
        description: __( 'An example of how to use the UrlInput component.', 'sam-gutenberg'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },         
        keywords: [
            __( 'Link', 'sam-gutenberg' ),
            __( 'Post', 'sam-gutenberg' ),
            __( 'Search', 'sam-gutenberg' ),
        ],
        attributes: {
            text: {
                type: 'string',
                source: 'text',
                selector: 'a',
            },
            url: {
                type: 'string',
                source: 'attribute',
                attribute: 'href',
                selector: 'a',
            },
        },
        edit: props => {
            const { attributes: { text, url },
                className, isSelected, setAttributes } = props;
            return (
                <div className={ className }>
                    { isSelected ? (

                        <Fragment>
                            <TextControl
                                id="example-input-field"
                                label={ __( 'Link Text', 'sam-gutenberg' ) }
                                value={ text }
                                onChange={ text => setAttributes( { text } ) }
                            />
                            <p>{ __( 'Link URL', 'sam-gutenberg' ) }</p>
                            <form
                                className="blocks-format-toolbar__link-modal-line blocks-format-toolbar__link-modal-line"
                                onSubmit={ event => event.preventDefault() }
                            >
                                <Tooltip text="Add Link">
                                    {icon}
                                </Tooltip>
                                <UrlInput
                                    className="url"
                                    value={ url }
                                    onChange={ url => setAttributes( { url } ) }
                                />
                                <IconButton
                                    icon="editor-break"
                                    label={ __( 'Apply', 'sam-gutenberg' ) }
                                    type="submit"
                                />
                            </form>
                        </Fragment>

                    ) : (

                        <p>
                            <a href={ url }>
                                { text || __( 'Edit link', 'sam-gutenberg' ) }
                            </a>
                        </p>

                    )}

                </div>
            );
        },
        save: props => {
            const { attributes: { text, url } } = props;

            return (
                <p>
                    <a href={ url }>
                        { text }
                    </a>
                </p>
            );
        },
    },
);
