import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import { StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

export interface IsEditingStateProps {
  isEditing: SourceOptionData;
}

export type IsEditingStateHandlerProps = StateHandlerMap<
  IsEditingStateProps
> & {
  closeIsEditing(): StateHandler<IsEditingStateProps>;
  openIsEditing(): StateHandler<IsEditingStateProps>;
};

export default withStateHandlers<
  IsEditingStateProps,
  IsEditingStateHandlerProps
>(
  { isEditing: false },
  {
    closeIsEditing: ({ isEditing }) => () => ({
      isEditing: false
    }),
    openIsEditing: ({ isEditing }) => () => ({
      isEditing: true
    })
  }
);
