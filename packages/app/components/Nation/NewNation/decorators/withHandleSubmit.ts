import { withHandlers } from 'recompose';

export interface WithHandleSubmitProps {
  handleSubmit(values: object): void;
}

export default withHandlers<{}, WithHandleSubmitProps>({
  handleSubmit: () => (values: object) => {
    console.log('SIMULATING SUBMISSION...', values);
  }
});
