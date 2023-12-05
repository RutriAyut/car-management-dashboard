import UserRoleService from "../services/userRoleService";

const roleId = async (userId: number) => {
  return await new UserRoleService().getRole(userId);
};

module.exports = roleId;
