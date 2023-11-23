import { UsersModel } from "../models/users";

interface PayLoad {
  email: string;
  password?: string;
}

export default class UserRepository {
  // get all data users
  async getAll() {
    return await UsersModel.query()
      .join("user_role", "users.id", "=", "user_role.id")
      .join("roles", "user_role.role_id", "=", "roles.id")
      .select("users.id", "users.email", "roles.name");
  }

  //cek user by id
  async getById(id: number) {
    return await UsersModel.query()
      .where("users.id", "=", id)
      .join("user_role", "users.id", "=", "user_role.id")
      .join("roles", "user_role.role_id", "=", "roles.id")
      .select("users.id", "users.email", "roles.name");
  }

  async getByEmail(email: string) {
    return await UsersModel.query().findOne({ email }).returning("*");
  }

  // register new member
  async post(param: PayLoad) {
    const email = param.email;
    const password = param.password;

    return await UsersModel.query().insert({
      email,
      password,
    });
  }
}
