import * as React from 'react';
import arrayMutators from 'final-form-arrays';
import { Button, Form as SUIForm, Header, TextArea } from 'semantic-ui-react';
import { Checkbox, ColorPicker, Field } from '@chronoscio/ui';
import { FieldArray } from 'react-final-form-arrays';
import { Form, FormRenderProps } from 'react-final-form';
import { Territory, validateForRFF } from '@chronoscio/api';

import BackButton from '../../../LeftPane/Pages/BackButton';
import withHandleSubmit, {
  WithHandleSubmitProps
} from './decorators/withHandleSubmit';

const renderForm = ({
  form: {
    mutators: { push }
  },
  hasValidationErrors,
  handleSubmit
}: FormRenderProps) => (
  <SUIForm onSubmit={handleSubmit}>
    <BackButton />
    <Header as="h1">New Territory</Header>
    <Field
      autofocus={true}
      as={() => <input type="date" />}
      label="Start date:"
      name="start_date"
    />
    <Field as={() => <input type="date" />} label="End date:" name="end_date" />

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
        icon="plus"
        onClick={() => push('references')}
        size="mini"
        type="button"
      />
    </SUIForm.Field>

    <SUIForm.Field>
      <Button content="Submit" disabled={hasValidationErrors} primary={true} />
    </SUIForm.Field>
  </SUIForm>
);

// Default values of our form. `references` is a 1-element array to show one
// input field for references by default
const defaultValues = {
  color: '#C64B4B',
  control_type: 'CC',
  references: ['']
};
// Function which validate values against the Territory model.
const validateTerritory = validateForRFF(Territory);

const NewTerritory: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Form
    initialValues={defaultValues}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={handleSubmit}
    render={renderForm}
    validate={validateTerritory}
  />
);

export default withHandleSubmit(NewTerritory);
