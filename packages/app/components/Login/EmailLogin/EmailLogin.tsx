import * as React from 'react';
import {
  Field,
  FieldRenderProps,
  FormRenderProps,
  Form as RFForm
} from 'react-final-form';
import { Button, Form as SuiForm, Input, InputProps } from 'semantic-ui-react';

import withEmailLogin from './decorators/withEmailLogin';

/**
 * Convert a SUI component so that it can be used in a Field component from
 * react-final-form.
 *
 * @param T - The SUI component to use as a form field.
 * @TODO Put this elsewhere when we need it in other forms in the app.
 */
const SuiFieldAdapter = (T: React.Component<any, any>) => ({
  input,
  meta,
  ...rest
}: FieldRenderProps) => <T {...input} {...rest} />;

const renderForm = ({ handleSubmit, pristine, invalid }: FormRenderProps) => (
  <SuiForm onSubmit={handleSubmit}>
    <SuiForm.Field>
      <Field
        name="username"
        render={SuiFieldAdapter(Input)}
        required
        placeholder="username"
      />
    </SuiForm.Field>
    <SuiForm.Field>
      <Field
        name="password"
        placeholder="Password"
        render={SuiFieldAdapter(Input)}
        required
        type="password"
      />
    </SuiForm.Field>

    <SuiForm.Field>
      <Button fluid type="submit" disabled={pristine || invalid}>
        Login with Email
      </Button>
    </SuiForm.Field>
  </SuiForm>
);

interface EmailLoginProps {
  login: () => Promise<void>;
}

const EmailLogin = ({ login }: EmailLoginProps) => (
  <RFForm onSubmit={login} render={renderForm} />
);

export default withEmailLogin(EmailLogin);
