import UserCarRepository from "../repositories/userCarRepository";

interface userCarLoad {
  id: number;
  userId: number;
}

export default class UserCarService {
  #userCarRepository: UserCarRepository;
  constructor() {
    this.#userCarRepository = new UserCarRepository();
  }

  async post(param: userCarLoad) {
    return await this.#userCarRepository.post(param);
  }

  async put(param: userCarLoad) {
    return await this.#userCarRepository.put(param);
  }

  async getById(id: number) {
    return await this.#userCarRepository.getById(id);
  }

  async delete(param: userCarLoad) {
    return await this.#userCarRepository.delete(param);
  }
}
