import * as React from 'react';
import arrayMutators from 'final-form-arrays';
import { Button, Form as SUIForm, Header, TextArea } from 'semantic-ui-react';
import { FieldArray } from 'react-final-form-arrays';
import { Form, FormRenderProps } from 'react-final-form';
import * as yup from 'yup';

import BackButton from '../../LeftPane/Pages/BackButton';
import Checkbox from './Checkbox';
import ColorPicker from './ColorPicker';
import Field from './Field';
import withHandleSubmit, {
  WithHandleSubmitProps
} from './decorators/withHandleSubmit';

// TODO This should be defined with the model
const validatePoliticalEntity = yup.object().shape({
  color: yup
    .string()
    .matches(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i), // #fa32be color regex
  description: yup.string(),
  isDisputed: yup.boolean(),
  links: yup
    .array()
    .of(
      yup
        .string()
        .max(150)
        .required()
    )
    .min(1),
  name: yup
    .string()
    .max(100)
    .required(),
  wikipedia_link: yup
    .string()
    .url()
    .required()
});

const renderForm = ({ hasValidationErrors, handleSubmit }: FormRenderProps) => (
  <SUIForm onSubmit={handleSubmit}>
    <BackButton />
    <Header as="h1">New Political Entity</Header>
    <Field autoFocus={true} name="name" placeholder="Political entity name" />
    <Checkbox label="Disputed territory?" name="isDisputed" toggle={true} />
    <Field
      as={TextArea}
      name="description"
      placeholder="Brief description of the political entity"
    />
    <Field name="wikipedia_link" placeholder="Wikipedia link" />
    <ColorPicker name="color" />
    <FieldArray name="links">
      {({ fields }) =>
        fields.map((link, index) => (
          <SUIForm.Field key={link}>
            <Field
              as={TextArea}
              label={`Reference #${index + 1}`}
              name={link}
              placeholder="Wikipedia-style citation"
            />

            <Button
              content="Add another reference"
              onClick={() => fields.push('')}
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
      <Button content="Submit" disabled={hasValidationErrors} primary={true} />
    </SUIForm.Field>
  </SUIForm>
);

const validate = async (values: object) => {
  try {
    await validatePoliticalEntity.validate(values, { abortEarly: false });
  } catch (err) {
    return err.inner.reduce(
      (allErrors: object, currentError: any) => ({
        ...allErrors,
        [currentError.path]: currentError.message
      }),
      {}
    );
  }
};

const NewNation: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Form
    initialValues={{ color: '#C64B4B', links: [''] }}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={handleSubmit}
    render={renderForm}
    validate={validate}
  />
);

export default withHandleSubmit(NewNation);
