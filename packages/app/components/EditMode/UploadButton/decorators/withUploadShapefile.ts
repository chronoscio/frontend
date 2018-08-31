import { compose, withHandlers } from 'recompose';
import * as shapefile from 'shapefile';

import withEditMode, {
  WithEditModeProps
} from '../../../decorators/withEditMode';

export interface WithUploadShapefileProps {
  handleUploadShapefile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Read an uploaded file via <input type="file" /> as an ArrayBuffer.
 *
 * @param inputFile - The uploaded file.
 * @see https://blog.shovonhasan.com/using-promises-with-filereader/
 */
const readAsArrayBuffer = (inputFile: File): Promise<ArrayBuffer> => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new Error('Problem parsing shapeefile.'));
    };

    reader.onload = () => {
      resolve(reader.result as ArrayBuffer);
    };
    reader.readAsArrayBuffer(inputFile);
  });
};

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default compose(
  withEditMode,
  withHandlers<WithEditModeProps, WithUploadShapefileProps>({
    handleUploadShapefile: ({ updateGeojson }) => async ({
      target: { files }
    }: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const uploaded = files[0];

        const arrayBuffer = await readAsArrayBuffer(uploaded);

        // Read the whole shapefile at once. If, in the future, we want to read the
        // shapefile incrementally (for memory reasons), use `shapefile.open`.
        const geojson = await shapefile.read(arrayBuffer);
        updateGeojson(geojson);
      } catch (err) {}
    }
  })
);
