import * as yup from 'yup';

export abstract class Entity {
  public description: string;
  public id: number;
  public links: string[];
  public name: string;
  public references: string[];
  public urlId: string;

  constructor(value: any) {
    Entity.schema().validateSync(value);
    this.description = value.description;
    this.id = value.id;
    this.links = value.links;
    this.name = value.name;
    this.references = value.references;
    this.urlId = value.url_id;
  }

  static schema() {
    return yup.object().shape({
      description: yup.string(),
      links: yup.array().of(
        yup
          .string()
          .url()
          .required()
      ),
      name: yup
        .string()
        .max(100)
        .required(),
      references: yup
        .array()
        .of(
          yup
            .string()
            .max(150)
            .required()
        )
        .min(1)
        .required(),
      url_id: yup
        .string()
        .max(75)
        .required()
    });
  }
}
