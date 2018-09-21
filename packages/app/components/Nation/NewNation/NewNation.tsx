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
    .matches(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i), // Color regex, e.g. #fa32be
  description: yup.string(),
  control_type: yup
    .string()
    .oneOf(['CC', 'DT'])
    .required(),
  links: yup.array().of(
    yup
      .string()
      .url()
      .required()
  ),
  name: yup
    .string()
    .max(100)
    .required(),
  references: yup
    .array()
    .of(
      yup
        .string()
        .max(150)
        .required()
    )
    .min(1)
    .required()
});

const formatControlType = (value: string) => value === 'DT';
const parseControlType = (value: boolean) => (value ? 'DT' : 'CC');

const renderForm = ({
  form: {
    mutators: { push }
  },
  hasValidationErrors,
  handleSubmit
}: FormRenderProps) => (
  <SUIForm onSubmit={handleSubmit}>
    <BackButton />
    <Header as="h1">New Political Entity</Header>
    <Field autoFocus={true} name="name" placeholder="Political entity name" />
    <Checkbox
      format={formatControlType}
      label="Disputed territory?"
      name="control_type"
      parse={parseControlType}
      toggle={true}
    />
    <Field
      as={TextArea}
      name="description"
      placeholder="Brief description of the political entity"
    />
    <ColorPicker name="color" />

    <Header as="h2">
      References
      <Header.Subheader>
        Please write here all the references you used to input the above
        information. Use the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Wikipedia:Citation_templates"
          target="_blank"
        >
          Wikipedia citation template
        </a>
        .
      </Header.Subheader>
    </Header>
    <FieldArray name="references">
      {({ fields }) =>
        fields.map((reference, index) => (
          <SUIForm.Field key={reference}>
            <Field
              as={TextArea}
              label={
                <span>
                  Reference #{index + 1}{' '}
                  {fields.length > 1 && (
                    <span>
                      {/* TODO Optimization: find a way to not use lambdas in render. */}
                      (<a onClick={() => fields.remove(index)}>Remove</a>)
                    </span>
                  )}
                </span>
              }
              name={reference}
              placeholder="Wikipedia-style citation"
            />
          </SUIForm.Field>
        ))
      }
    </FieldArray>
    <SUIForm.Field>
      <Button
        content="Add another reference"
        onClick={() => push('references')}
        size="mini"
        type="button"
      />
    </SUIForm.Field>

    <Header as="h2">
      Links
      <Header.Subheader>
        If you wish to provide some other external links related to this
        political entity, please do so here.
      </Header.Subheader>
    </Header>
    <FieldArray name="links">
      {({ fields }) =>
        fields.map((link, index) => (
          <SUIForm.Field key={link}>
            <Field
              as={TextArea}
              label={
                <span>
                  Link #{index + 1} (
                  <a onClick={() => fields.remove(index)}>Remove</a>)
                </span>
              }
              name={link}
              placeholder="External URL"
            />
          </SUIForm.Field>
        ))
      }
    </FieldArray>
    <SUIForm.Field>
      <Button
        content="Add link"
        onClick={() => push('links')}
        size="mini"
        type="button"
      />
    </SUIForm.Field>

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
    initialValues={{ color: '#C64B4B', references: [''] }}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={handleSubmit}
    render={renderForm}
    validate={validate}
  />
);

export default withHandleSubmit(NewNation);
