import * as yup from 'yup';

export abstract class Entity {
  public description: string;
  public links: string[];
  public name: string;
  public references: string[];
  public urlId: string;

  constructor(value: any) {
    Entity.validationSchema().validateSync(value);
  }

  static validationSchema() {
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

  static validate(value: any, options?: yup.ValidateOptions) {
    return Entity.validationSchema().validate(value, options);
  }
}
