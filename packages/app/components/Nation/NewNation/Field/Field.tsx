import * as React from 'react';
import {
  Field as RFFField,
  FieldProps as RFFFieldProps,
  FieldRenderProps
} from 'react-final-form';
import { Form, Input, Popup } from 'semantic-ui-react';

interface SUIFieldProps {
  as?: string | React.ComponentType;
  label?: string;
}

/**
 * A form field with SUI components.
 */
const SUIField: React.SFC<SUIFieldProps & FieldRenderProps> = ({
  as: T = Input,
  children,
  input,
  label,
  meta,
  ...otherProps
}) => (
  <Form.Field>
    {label && <label htmlFor={input && input.name}>{label}</label>}
    <Popup
      content={meta && (meta.error || meta.submitError)}
      inverted={true}
      on="click"
      open={
        !!meta &&
        !meta.valid &&
        (!meta.pristine || meta.touched) &&
        !meta.dirtySinceLastSubmit
      }
      position="top center"
      size="mini"
      trigger={<T id={input && input.name} {...input} {...otherProps} />}
    />

    {children}
  </Form.Field>
);

interface FieldProps extends RFFFieldProps, SUIFieldProps {}

/**
 * Wire up react-final-form with SUIField.
 */
const Field: React.SFC<FieldProps> = props => (
  <RFFField render={SUIField} {...props} />
);

// TODO Move it upper the hierarchy if other components need this generic
// component too.
export default Field;
