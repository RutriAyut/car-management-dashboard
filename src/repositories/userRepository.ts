import { UsersModel } from "../models/users";

interface PayLoad {
  email: string;
  password: string;
}

export default class UserRepository {
  async getAll() {
    return await UsersModel.query();
  }

  // async getByEmail(req:Request){
  //   const reqBody = req.body
  //   const email = reqBody.email;
  //   return await UsersModel.query()
  // }

  async post(param: PayLoad) {
    const email = param.email;
    const password = param.password;

    return await UsersModel.query().insert({
      email,
      password,
    });
  }
}
