import * as React from 'react';
import { Button, Form, Popup } from 'semantic-ui-react';
import { Field, FieldRenderProps } from 'react-final-form';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const ColorButton = styled(Button)`
  background-color: ${props => props['data-color']} !important;
`;

interface ColorPickerProps {
  name: string;
}

const handleChangeComplete = (onChange: (event: any) => void) => ({
  hex
}: any) => onChange(hex);

const renderColorPicker = ({
  input: { onChange, value }
}: FieldRenderProps) => (
  <Form.Field>
    <Popup
      content={
        <SketchPicker
          color={value}
          disableAlpha={true}
          onChangeComplete={handleChangeComplete(onChange)}
        />
      }
      on="click"
      trigger={
        <ColorButton
          data-color={value}
          icon="certificate"
          content="Political entity color"
          size="mini"
          type="button"
        />
      }
    />
  </Form.Field>
);

export const ColorPicker: React.SFC<ColorPickerProps> = props => (
  <Field render={renderColorPicker} {...props} />
);
