import { Geometry } from 'geojson';
import * as yup from 'yup';

export class Territory {
  public endDate?: Date;
  public geo: Geometry;
  public id: number;
  public polentId: string;
  public references: string[];
  public startDate: Date;

  constructor(value: any) {
    Territory.schema().validateSync(value);
    this.endDate = new Date(value.end_date);
    this.geo = value.geo;
    this.id = value.id;
    this.polentId = value.entity;
    this.references = value.references;
    this.startDate = new Date(value.start_date);
  }

  static schema() {
    return yup.object().shape({
      end_date: yup.date().required(),
      start_date: yup.date().required()
    });
  }
}
