import CarRepository from "../repositories/carRepository";

export default class CarService {
  #carRepository: CarRepository;

  constructor() {
    this.#carRepository = new CarRepository();
  }

  async getAll() {
    return await this.#carRepository.getAll();
  }

  async getById(id: number) {
    return await this.#carRepository.getById(id);
  }

  async post(req: any, img: string) {
    return await this.#carRepository.post(req, img);
  }

  async put(id: number, name: string, rent: number, type: number, img: string) {
    return await this.#carRepository.put(id, name, rent, type, img);
  }

  async delete(id: number) {
    return await this.#carRepository.delete(id);
  }
}
