import { useNavigate, useParams } from "react-router-dom";
import { buttonForm } from "../style";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

import Input from "../../../Input";
import Text from "../../../Text";
import Button from "../../../Button";
import Select from "../../../Select";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormBox from "../FormBox";
import FormItem from "../FormItem";
import { DataCarById, DataType, DataTypes, PostCars } from "../../../Props";

const EditCar = () => {
  const navigate = useNavigate();

  const handleOnCancel = () => {
    navigate("/admin/cars/");
  };

  const { id } = useParams();
  const API = "http://localhost:8000/cars/details/" + id;
  const [data, setData] = useState<DataCarById>();

  const APIType = "http://localhost:8000/type";
  const [type, setType] = useState<DataTypes>([]);

  const [driver, setDriver] = useState<boolean>(false);
  const [available, setAvailable] = useState<boolean>(false);

  useEffect(() => {
    if (type.length === 0) {
      fetch(APIType)
        .then((res) => res.json())
        .then((results) => {
          setType(results.getTypes);
        });
    }
  }, [type]);

  useEffect(() => {
    if (!data) {
      fetch(API)
        .then((res) => res.json())
        .then((results) => {
          setData(results);
          setAvailable(results.filterById[0].available);
          setDriver(results.filterById[0].driver);
        });
    }
  }, [data]);

  const handleOnChange: () => void = () => {
    setAvailable(!available);
  };

  const handleOnDriver: () => void = () => {
    setDriver(!driver);
  };

  const APIPUT = "http://localhost:8000/cars/update/" + id;
  const token = localStorage.getItem("token");

  const put = async ({
    manufacture,
    model,
    rent,
    picture,
    type,
    capacity,
    transmission,
    description,
    availableAt,
    available,
    driver,
  }: PostCars) => {
    try {
      fetch(APIPUT, {
        method: "PUT",
        body: JSON.stringify({
          manufacture,
          model,
          rent,
          picture,
          type,
          capacity,
          transmission,
          description,
          availableAt,
          available,
          driver,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          res.ok
            ? withReactContent(Swal)
                .fire({
                  position: "center",
                  icon: "success",
                  title: "Data Mobil Berhasil diupdate",
                  showConfirmButton: false,
                  timer: 1500,
                })
                .then(() => {
                  navigate("/admin/cars");
                })
            : console.log("gagal");
          res.status === 400
            ? withReactContent(Swal).fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
              })
            : console.log("error");
        })
        .catch((errr) => {
          console.log({ errr });
        });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleOnSave = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      manufacture: { value: string };
      model: { value: string };
      price: { value: number };
      foto: { value: string };
      type: { value: number };
      capacity: { value: number };
      transmission: { value: string };
      description: { value: string };
      availableAt: { value: string };
    };

    const manufacture = target.manufacture.value;
    const model = target.model.value;
    const rent = target.price.value;
    const picture = target.foto.value;
    const type = target.type.value;
    const capacity = target.capacity.value;
    const transmission = target.transmission.value;
    const description = target.description.value;
    const availableAt = target.availableAt.value;

    // const picture = new FormData();

    // picture.append("File", file);

    await put({
      manufacture,
      model,
      rent,
      picture,
      type,
      capacity,
      transmission,
      description,
      availableAt,
      available,
      driver,
    });
  };

  if (!data) {
    return <Spinner />;
  }

  console.log({ data });

  return (
    <>
      <form onSubmit={handleOnSave}>
        <FormBox level="100%">
          <FormItem>
            <Col xs={4}>Manufacture*</Col>
            <Col xs={5}>
              <Input
                id="manufacture"
                type="text"
                value={data.filterById[0].manufacture}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Model*</Col>
            <Col xs={5}>
              <Input id="model" type="text" value={data.filterById[0].model} />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Harga*</Col>
            <Col xs={5}>
              <Input
                id="price"
                type="text"
                value={data.filterById[0].rent_per_day}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Foto*</Col>
            <Col xs={5}>
              <Input id="foto" type="file" />
              <Text size="10px" height="14px">
                File size max. 2MB
              </Text>
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Tipe*</Col>
            <Col xs={5}>
              <Select
                id="type"
                required="required"
                value={data.filterById[0].type}
              >
                {type &&
                  type.map(({ id, name }: DataType, key: number) => {
                    return (
                      <option key={key} value={id}>
                        {name}
                      </option>
                    );
                  })}
              </Select>
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Capacity*</Col>
            <Col xs={5}>
              <Input
                id="capacity"
                type="text"
                value={data.filterById[0].capacity}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Transmission*</Col>
            <Col xs={5}>
              <Input
                type="text"
                id="transmission"
                value={data.filterById[0].transmission}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Description*</Col>
            <Col xs={5}>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                defaultValue={data.filterById[0].description}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Available At*</Col>
            <Col xs={5}>
              <Input
                type="date"
                id="availableAt"
                value={data.filterById[0].available_at}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Available</Col>
            <Col xs={5}>
              <Form.Check // prettier-ignore
                type="switch"
                id="available"
                checked={available}
                onChange={handleOnChange}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Driver</Col>
            <Col xs={5}>
              <Form.Check // prettier-ignore
                type="switch"
                id="driver"
                checked={driver}
                onChange={handleOnDriver}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Start Rent</Col>
            <Col xs={5}>-</Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Finish Rent</Col>
            <Col xs={5}>-</Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Create At</Col>
            <Col xs={5}>
              {!data.log[0].create_at ? "-" : data.log[0].create_at}
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Update At</Col>
            <Col xs={5}>
              {" "}
              {!data.log[0].update_at ? "-" : data.log[0].update_at}
            </Col>
          </FormItem>
        </FormBox>
        <div className={buttonForm}>
          <Button variant={4} onClick={handleOnCancel}>
            Cancel
          </Button>
          <Button type="submit" variant={3}>
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditCar;
