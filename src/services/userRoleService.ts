import UserRoleRepository from "../repositories/userRoleRepository";

export default class UserRoleService {
  #userRoleRepository: UserRoleRepository;

  constructor() {
    this.#userRoleRepository = new UserRoleRepository();
  }

  async post(userId: number) {
    return await this.#userRoleRepository.post(userId);
  }
}
