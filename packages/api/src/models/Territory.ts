import { GeoJSONObject } from '@turf/helpers';
import * as yup from 'yup';

export class Territory {
  public endDate: Date;
  public geo: GeoJSONObject;
  public id: number;
  public nationId: string;
  public references: string[];
  public startDate: Date;

  constructor(value: any) {
    Territory.schema().validateSync(value);
    this.endDate = new Date(value.end_date);
    this.geo = value.geo;
    this.id = value.id;
    this.nationId = value.nation;
    this.references = value.references;
    this.endDate = new Date(value.end_date);
  }

  static schema() {
    return yup.object().shape({
      end_date: yup.date().required(),
      start_date: yup.date().required()
    });
  }
}
