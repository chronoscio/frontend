import * as yup from 'yup';

const diploTypes = [
  { name: 'A', description: 'Military Alliance' },
  { name: 'D', description: 'Dual Monarchy' },
  { name: 'M', description: 'Condominium' },
  { name: 'T', description: 'Trade League' },
  { name: 'W', description: 'At War' },
  { name: 'P', description: 'State or Province' },
  { name: 'CP', description: 'Client State - Puppet State' },
  { name: 'CV', description: 'Client State - Vassal State' },
  { name: 'CPU', description: 'Client State - Personal Union' },
  { name: 'CCR', description: 'Client State - Colony - Royal' },
  { name: 'CCP', description: 'Client State - Colony - Propreitary' },
  { name: 'CCC', description: 'Client State - Colony - Charter' }
];

export abstract class DiplomaticRelation {
  public childParties: string[];
  public endDate: Date;
  public diploType: string;
  public id: number;
  public parentParties: string[];
  public references: string[];
  public startDate: Date;

  constructor(value: any) {
    DiplomaticRelation.schema().validateSync(value);
    this.childParties = value.child_parties;
    this.endDate = new Date(value.end_date);
    this.diploType = value.diplo_type;
    this.id = value.id;
    this.parentParties = value.parent_parties;
    this.references = value.references;
    this.startDate = new Date(value.start_date);
  }

  static schema() {
    return yup.object().shape({
      diplo_type: yup.string().oneOf(diploTypes.map(({ name }) => name)),
      end_date: yup.date().required(),
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
      start_date: yup.date().required()
    });
  }
}
