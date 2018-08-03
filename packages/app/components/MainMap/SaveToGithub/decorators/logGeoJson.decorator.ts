import { withHandlers } from 'recompose';

export default withHandlers({
  log: ({ geoJson }) => () => console.log(JSON.stringify(geoJson, null, 2))
});
