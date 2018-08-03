import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import { StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

export interface WithGeoJsonStateProps {
  geoJson: SourceOptionData;
}

export type WithGeoJsonStateHandlerProps = StateHandlerMap<
  WithGeoJsonStateProps
> & {
  updateGeoJson(): StateHandler<WithGeoJsonStateProps>;
};

export default withStateHandlers<
  WithGeoJsonStateProps,
  WithGeoJsonStateHandlerProps
>(
  { geoJson: undefined },
  {
    updateGeoJson: () => value => ({
      geoJson: value
    })
  }
);
