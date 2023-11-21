import UserRepository from "../repositories/userRepository";

interface PayLoad {
  email: string;
  password: string;
}

export default class UserService {
  #userRepository: UserRepository;

  constructor() {
    this.#userRepository = new UserRepository();
  }

  async post(param: PayLoad) {
    return await this.#userRepository.post(param);
  }
}
