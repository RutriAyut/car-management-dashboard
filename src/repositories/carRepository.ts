import { CarModel } from "../models/cars";

export default class CarRepository {
  async getAll() {
    return (await CarModel.query()) || [];
  }

  async getById(id: number) {
    return await CarModel.query().where("id", id).throwIfNotFound();
  }

  async post(reqBody: any, img: string) {
    // const reqBody: any = req.body;
    const id = reqBody.id;
    const name = reqBody.name;
    const rent_per_day = reqBody.rent;
    const type = reqBody.type;
    const image = img;

    const postCar = await CarModel.query().insert({
      id,
      name,
      rent_per_day,
      image,
      type,
    });
  }

  async put(
    id: number,
    name: string,
    rent_per_day: number,
    type: number,
    image: string
  ) {
    const updateDB = await CarModel.query().where("id", "=", id).update({
      name,
      rent_per_day,
      image,
      type,
    });
  }

  async delete(id: number) {
    const deleteData = await CarModel.query().where("id", id).del();
  }
}
