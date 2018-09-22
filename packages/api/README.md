# @chronoscio/api

API interface with the ChronoScio backend.

## Usage

Here is an example with the `PoliticalEntity` model, but any other model would work similarily.

```javascript
import { api, PoliticalEntity } from '@chronoscio/api';

const politicalEntity: PoliticalEntity = await api.politicalEntities.get(12);
const politicalEntities: PoliticalEntity[] = await api.politicalEntities.getAll(
  {
    params: {
      date: new Date()
    }
  }
);
const reponse1: any = await api.politicalEntities.post({
  /* some data */
});
const reponse2: any = await api.politicalEntities.patch(12, {
  /* some new data */
});
const reponse3: any = await api.politicalEntities.delete(12);
// TODO Types of response1, response2 and response3 to be defined.
```
