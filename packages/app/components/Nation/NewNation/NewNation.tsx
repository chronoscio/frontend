import * as React from 'react';
import { Button, Form as SUIForm, Header, TextArea } from 'semantic-ui-react';
import { Form, FormRenderProps } from 'react-final-form';

import BackButton from '../../LeftPane/Pages/BackButton';
import withHandleSubmit, {
  WithHandleSubmitProps
} from './decorators/withHandleSubmit';
import Field from './Field';

const renderForm = ({ handleSubmit }: FormRenderProps) => (
  <SUIForm onSubmit={handleSubmit}>
    <BackButton />
    <Header as="h1">New Political Entity</Header>
    <Field name="name" placeholder="Political entity name" />
    <Field as={TextArea} name="description" placeholder="Brief description" />
    <Field name="wikipedia_link" placeholder="Wikipedia link" />

    <Button content="Submit" primary={true} />
  </SUIForm>
);

const NewNation: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit} render={renderForm} />
);

export default withHandleSubmit(NewNation);
