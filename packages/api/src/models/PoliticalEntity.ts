import * as yup from 'yup';

import { Entity } from './Entity';

export class PoliticalEntity extends Entity {
  public color: string;
  public controlType: string;

  constructor(value: any) {
    super(value);
    PoliticalEntity.schema().validateSync(value);
    this.color = value.color;
    this.controlType = value.control_type;
  }

  static schema() {
    return Entity.schema().shape({
      color: yup
        .string()
        .matches(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i) // Color regex, e.g. #fa32be
        .nullable(true),
      control_type: yup
        .string()
        .oneOf(['CC', 'DT'])
        .required()
    });
  }
}
