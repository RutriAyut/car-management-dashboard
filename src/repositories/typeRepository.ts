import { CarTypeModel } from "../models/types";

export default class TypeRepository {
  async getAll() {
    return (await CarTypeModel.query()) || [];
  }

  async getById(id: number) {
    return await CarTypeModel.query().where("id", id).throwIfNotFound();
  }
}
