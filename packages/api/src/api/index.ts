import { apiEndpoint } from './utils/apiEndpoint';
import * as Models from '../models';

const diplomaticRelations = apiEndpoint('/diprels', Models.DiplomaticRelation);
const politicalEntities = apiEndpoint(
  '/politicalentities',
  Models.PoliticalEntity
);
const territories = apiEndpoint('/territories', Models.Territory);

export const api = {
  diplomaticRelations,
  politicalEntities,
  territories
};
