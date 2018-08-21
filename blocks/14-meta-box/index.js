/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody } = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'sam-gutenberg/meta-box',
    {
        title: __( 'Example - Meta Box', 'sam-gutenberg' ),
        description: __( 'An example of how to build a block with a meta box field.', 'sam-gutenberg'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },         
        keywords: [
            __( 'Meta', 'sam-gutenberg' ),
            __( 'Custom field', 'sam-gutenberg' ),
            __( 'Box', 'sam-gutenberg' ),
        ],
        attributes: {
            text: {
                type: 'string',
                source: 'meta',
                meta: 'sam-gutenberg_gb_metabox',
            },
        },
        edit: props => {
            const { attributes: { text }, className, setAttributes } = props;
            return [
                <InspectorControls>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Meta box', 'sam-gutenberg' ) }
                            value={ text }
                            onChange={ text => setAttributes( { text } ) }
                        />
                    </PanelBody>
                </InspectorControls>,                
                <div className={ className } >
                    <p>{ __( 'Check the meta', 'sam-gutenberg' ) }</p>
                </div>
            ];
        },
        save: props => {
            return (
                <p>{ __( 'Check the meta', 'sam-gutenberg' ) }</p>
            );
        },
    },
);
