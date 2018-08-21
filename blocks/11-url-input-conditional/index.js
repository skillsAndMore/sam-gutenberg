/**
 * Block dependencies
 */
import classnames from 'classnames';
import icons from './icons';

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
    'sam-gutenberg/url-input-conditional',
    {
        title: __( 'Example - Conditional Save URL Input', 'sam-gutenberg' ),
        description: __( 'An example of how to use a condition inside the save setting.', 'sam-gutenberg'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icons.conditional,
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
                default: '',
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
                                    {icons.url}
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
            const isEmpty = text.length > 0 ? false : true;
            return (
                <p>
                    { isEmpty ? (
                        __( 'No link', 'sam-gutenberg' )
                    ) : (
                        <a href={ url }>
                            { text }
                        </a>
                    ) }
                </p>
            );
        },
    },
);
