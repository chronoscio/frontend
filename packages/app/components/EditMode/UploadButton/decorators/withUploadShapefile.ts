import * as shapefile from 'shapefile';
import { withHandlers } from 'recompose';

export interface WithUploadShapefileProps {
  handleUploadShapfile: () => void;
}

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default withHandlers<{}, WithUploadShapefileProps>({
  handleUploadShapfile: () => async () => {
    // Read the whole shapefile at once. If, in the future, we want to read the
    // shapefile incrementally (for memory reasons), use `shapefile.open`.
    const result = await shapefile.read(
      'https://cdn.rawgit.com/mbostock/shapefile/master/test/points.shp'
    );
    return result;
  }
});
