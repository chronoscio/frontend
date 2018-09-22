import * as React from 'react';
import {
  Field as RFFField,
  FieldProps as RFFFieldProps,
  FieldRenderProps
} from 'react-final-form';
import { Form, Input, Label } from 'semantic-ui-react';

interface SUIFieldProps {
  as?: string | React.ComponentType;
  label?: string | JSX.Element;
}

/**
 * A form field with SUI components.
 */
const renderField: React.SFC<SUIFieldProps & FieldRenderProps> = ({
  as: T = Input,
  input,
  label,
  meta,
  ...otherProps
}) => {
  const showError = !!(
    meta &&
    meta.touched &&
    (meta.error || meta.submitError)
  );
  return (
    <Form.Field>
      {label && <label htmlFor={input.name}>{label}</label>}
      <T id={input.name} {...input} {...otherProps} />
      {showError && (
        <Label pointing={true}>{meta.error || meta.submitError}</Label>
      )}
    </Form.Field>
  );
};

interface FieldProps extends RFFFieldProps, SUIFieldProps {}

/**
 * Wire up react-final-form with SUIField.
 */
export const Field: React.SFC<FieldProps> = props => (
  <RFFField render={renderField} {...props} />
);
