/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    ColorPalette,
} = wp.editor;
const {
    Button,
    ButtonGroup,
    CheckboxControl,
    PanelBody,
    PanelRow,
    PanelColor,
    RadioControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    Toolbar,
    SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl }, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'sam-gutenberg' ) }
                    initialOpen={ false }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'sam-gutenberg' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <CheckboxControl
                        heading={ __( 'Checkbox Control', 'sam-gutenberg' ) }
                        label={ __( 'Check here', 'sam-gutenberg' ) }
                        help={ __( 'Checkbox control help text', 'sam-gutenberg' ) }
                        checked={ checkboxControl }
                        onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
                    />
                </PanelBody>

                <PanelColor
                    title={ __( 'Color Panel', 'sam-gutenberg' ) }
                    colorValue={ colorPaletteControl }
                >
                    <ColorPalette
                        value={ colorPaletteControl }
                        onChange={ colorPaletteControl => setAttributes( { colorPaletteControl } ) }
                    />
                </PanelColor>

                <PanelBody>
                    <RadioControl
                        label={ __( 'Radio Control', 'sam-gutenberg' ) }
                        selected={ radioControl }
                        options={ [
                            { label: 'Author', value: 'a' },
                            { label: 'Editor', value: 'e' },
                        ] }
                        onChange={ radioControl => setAttributes( { radioControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __( 'Range Control', 'sam-gutenberg' ) }
                        value={ rangeControl }
                        onChange={ rangeControl => setAttributes( { rangeControl } ) }
                        min={ 1 }
                        max={ 10 }
                    />
                </PanelBody>

                <PanelBody>
                    <TextControl
                        label={ __( 'Text Control', 'sam-gutenberg' ) }
                        help={ __( 'Text control help text', 'sam-gutenberg' ) }
                        value={ textControl }
                        onChange={ textControl => setAttributes( { textControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <TextareaControl
                        label={ __( 'Text Area Control', 'sam-gutenberg' ) }
                        help={ __( 'Text area control help text', 'sam-gutenberg' ) }
                        value={ textareaControl }
                        onChange={ textareaControl => setAttributes( { textareaControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <ToggleControl
                        label={ __( 'Toggle Control', 'sam-gutenberg' ) }
                        checked={ toggleControl }
                        onChange={ toggleControl => setAttributes( { toggleControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <SelectControl
                        label={ __( 'Select Control', 'sam-gutenberg' ) }
                        value={ selectControl }
                        options={ [
                            { value: 'a', label: __( 'Option A', 'sam-gutenberg' ) },
                            { value: 'b', label: __( 'Option B', 'sam-gutenberg' ) },
                            { value: 'c', label: __( 'Option C', 'sam-gutenberg' ) },
                        ] }
                        onChange={ selectControl => setAttributes( { selectControl } ) }
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
