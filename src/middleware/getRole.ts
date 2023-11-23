import UserRoleService from "../services/userRoleService";
import RoleService from "../services/roleService";

const roleId = async (userId: number) => {
  return await new UserRoleService().getRole(userId);
};

module.exports = roleId;
