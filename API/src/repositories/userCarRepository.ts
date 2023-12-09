import { UserCarModel } from "../models/userCar";

interface userCarLoad {
  id: number;
  userId: number;
}
export default class UserCarRepository {
  async getAll() {
    return await UserCarModel.query();
  }

  async getById(id: number) {
    return await UserCarModel.query().where({ id }).throwIfNotFound();
  }

  async post(param: userCarLoad) {
    const id = param.id;
    const createBy = param.userId;
    const createAt = new Date();
    return await UserCarModel.query().insert({
      id: id,
      create_by: createBy,
      create_at: createAt,
    });
  }

  async put(param: userCarLoad) {
    const id = param.id;
    const updateBy = param.userId;
    const updateAt = new Date();
    return await UserCarModel.query().where({ id }).update({
      update_by: updateBy,
      update_at: updateAt,
    });
  }

  async delete(param: userCarLoad) {
    const id = param.id;
    const deleteBy = param.userId;
    const deleteAt = new Date();
    return await UserCarModel.query().where({ id }).update({
      delete_by: deleteBy,
      delete_at: deleteAt,
    });
  }
}
