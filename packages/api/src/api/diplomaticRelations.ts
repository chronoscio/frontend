import axios, { AxiosRequestConfig } from 'axios';

import { DiplomaticRelation } from '../models';

const API_ENDPOINT = `${process.env.BACKEND_URL}/diprels/`;

export const diplomaticRelations = {};
