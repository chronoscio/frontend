import * as React from 'react';
import arrayMutators from 'final-form-arrays';
import {
  Button,
  Checkbox,
  Form as SUIForm,
  Header,
  TextArea
} from 'semantic-ui-react';
import { FieldArray } from 'react-final-form-arrays';
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
    <FieldArray name="links">
      {({ fields }) =>
        fields.map((link, index) => (
          <SUIForm.Field key={link}>
            <Field
              as={TextArea}
              label={`Reference #${index + 1}`}
              name={`${link}.body`}
              placeholder="Wikipedia-style citation"
            />

            <Button
              content="Add another reference"
              onClick={() => fields.push({ body: '' })}
              size="mini"
              type="button"
            />
            <Button
              content="Remove this reference"
              disabled={fields.length <= 1}
              onClick={() => fields.remove(index)}
              size="mini"
              type="button"
            />
          </SUIForm.Field>
        ))
      }
    </FieldArray>

    <SUIForm.Field>
      <Button content="Submit" primary={true} />
    </SUIForm.Field>
  </SUIForm>
);

const NewNation: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Form
    initialValues={{ color: '#C64B4B', links: [{ body: '' }] }}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={handleSubmit}
    render={renderForm}
  />
);

export default withHandleSubmit(NewNation);
