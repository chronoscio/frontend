import { compose, withHandlers } from 'recompose';
import * as shapefile from 'shapefile';
import { subscribe } from 'react-contextual';

import {
  UPLOADED_TERRITORY,
  WithEditTerritoryStoreProps
} from '../../decorators/withEditTerritoryStore';

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
      reject(new Error('Problem parsing shapefile.'));
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
  subscribe('withEditTerritoryStore'),
  withHandlers<WithEditTerritoryStoreProps, {}>({
    handleUploadShapefile: ({ addShapefile }) => async ({
      target: { files }
    }: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const uploaded = files[0];

        if (uploaded.size > 2500000) {
          console.error('Max file size is 25MB.'); // TODO Maybe add an alert banner?
          return;
        }

        const arrayBuffer = await readAsArrayBuffer(uploaded);

        // Read the whole shapefile at once. If, in the future, we want to read the
        // shapefile incrementally (for memory reasons), use `shapefile.open`.
        const geojson = await shapefile.read(arrayBuffer);

        // Store this shapefile in memory in our withShapefileStore
        addShapefile({
          geojson,
          name: uploaded.name,
          source: UPLOADED_TERRITORY,
          size: uploaded.size
        });
      } catch (err) {
        console.error(err);
      }
    }
  })
);
