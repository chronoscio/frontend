import * as React from 'react';
import {
  Button,
  Checkbox,
  Form as SUIForm,
  Header,
  TextArea
} from 'semantic-ui-react';
import { Form, FormRenderProps } from 'react-final-form';

import BackButton from '../../LeftPane/Pages/BackButton';
import ColorPicker from './ColorPicker';
import Field from './Field';
import withHandleSubmit, {
  WithHandleSubmitProps
} from './decorators/withHandleSubmit';

const renderForm = ({ handleSubmit }: FormRenderProps) => (
  <SUIForm onSubmit={handleSubmit}>
    <BackButton />
    <Header as="h1">New Political Entity</Header>
    <Field name="name" placeholder="Political entity name" />
    <Field
      as={Checkbox}
      label="Disputed territory?"
      name="control_type"
      toggle={true}
      type="checkbox"
    />
    <Field as={TextArea} name="description" placeholder="Brief description" />
    <Field name="wikipedia_link" placeholder="Wikipedia link" />
    <ColorPicker name="color" />

    <Button content="Submit" primary={true} />
  </SUIForm>
);

const NewNation: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Form
    initialValues={{ color: '#C64B4B' }}
    onSubmit={handleSubmit}
    render={renderForm}
  />
);

export default withHandleSubmit(NewNation);
