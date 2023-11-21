import { UserRoleModel } from "../models/userRole";

export default class UserRoleRepository {
  async post(userId: number) {
    const roleId = 3;

    return await UserRoleModel.query().insert({
      id: userId,
      role_id: roleId,
    });
  }
}
