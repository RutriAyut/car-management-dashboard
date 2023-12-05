import UserRepository from "../repositories/userRepository";

interface PayLoad {
  email: string;
  password?: string;
}

export default class UserService {
  #userRepository: UserRepository;

  constructor() {
    this.#userRepository = new UserRepository();
  }

  // register new member
  async post(param: PayLoad) {
    return await this.#userRepository.post(param);
  }

  //get all data
  async getAll() {
    return await this.#userRepository.getAll();
  }

  //cek user by id
  async getById(id: number) {
    return await this.#userRepository.getById(id);
  }

  //cek user by email
  async getByEmail(param: PayLoad) {
    const email = param.email || "";
    return await this.#userRepository.getByEmail(email);
  }
}
