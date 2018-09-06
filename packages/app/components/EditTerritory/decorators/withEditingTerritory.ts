import { compose, withPropsOnChange } from 'recompose';
import { withRouter } from 'next/router';

export interface WithEditingTerritoryProps {
  isEditingTerritory: boolean; // Are we currently in editing mode? I.e. edit dates, upload shapefile etc.
}

/**
 * HOC which looks in the current URL if we are editing a territory.
 */
export default compose(
  withRouter,
  withPropsOnChange(
    ['router'],
    ({
      router: {
        query: { edit }
      },
      ...otherProps
    }) => ({
      ...otherProps,
      isEditingTerritory: edit === 'edit'
    })
  )
);
