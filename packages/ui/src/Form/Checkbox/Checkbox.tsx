import * as React from 'react';
import {
  Field as RFFField,
  FieldProps as RFFFieldProps,
  FieldRenderProps
} from 'react-final-form';
import { Checkbox as SUICheckbox, Form } from 'semantic-ui-react';

interface SUIFieldProps {
  label?: string;
}

/**
 * A form field with SUI components.
 */
const renderCheckbox: React.SFC<SUIFieldProps & FieldRenderProps> = ({
  children,
  input,
  label,
  meta,
  ...otherProps
}) => (
  <Form.Field>
    {label && <label htmlFor={input.name}>{label}</label>}
    <SUICheckbox
      checked={input.checked}
      id={input.name}
      onChange={input.onChange}
      {...otherProps}
    />
  </Form.Field>
);

interface FieldProps extends RFFFieldProps, SUIFieldProps {}

/**
 * Wire up react-final-form with SUIField.
 */
export const Checkbox: React.SFC<FieldProps> = props => (
  <RFFField render={renderCheckbox} type="checkbox" {...props} />
);
