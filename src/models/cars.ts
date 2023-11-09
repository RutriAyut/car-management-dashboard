import { Model, ModelObject } from "objection";

export class CarModel extends Model {
  id!: number;
  name!: string;
  rent_per_day!: number;
  image!: string;
  type!: number;
  update!: Date;

  static get tableName() {
    return "cars";
  }
}

export type cars = ModelObject<CarModel>;
