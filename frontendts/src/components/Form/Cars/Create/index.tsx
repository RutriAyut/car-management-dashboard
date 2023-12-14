import { useNavigate } from "react-router-dom";
import { buttonForm } from "../style";
import Col from "react-bootstrap/Col";
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
import { DataType, DataTypes, PostCars } from "../../../Props";

const CreateCar = () => {
  const navigate = useNavigate();
  const handleOnCancel = () => {
    navigate("/admin/cars/");
  };

  const APIType = "http://localhost:8000/type";
  const [type, setType] = useState<DataTypes>([]);

  useEffect(() => {
    if (type.length === 0) {
      fetch(APIType)
        .then((res) => res.json())
        .then((results) => {
          setType(results.getTypes);
        });
    }
  }, [type]);

  const API = "http://localhost:8000/cars/create";
  const token = localStorage.getItem("token");

  const post = async ({
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
      fetch(API, {
        method: "POST",
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
                  title: "Data Mobil Berhasil disimpan",
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

  const [available, setAvailable] = useState(false);
  const handleOnChange = () => {
    setAvailable(!available);
  };

  const [driver, setDriver] = useState(false);
  const handleOnDriver = () => {
    setDriver(!driver);
  };

  const handleOnSave = async (e: any) => {
    e.preventDefault();

    const manufacture = e.target.manufacture.value;
    const model = e.target.model.value;
    const rent = e.target.price.value;
    const picture = e.target.foto.files[0];
    const type = e.target.type.value;
    const capacity = e.target.capacity.value;
    const transmission = e.target.transmission.value;
    const description = e.target.description.value;
    const availableAt = e.target.availableAt.value;

    // const picture = new FormData();

    // picture.append("File", file);

    await post({
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

  return (
    <form onSubmit={handleOnSave}>
      <FormBox level="100%">
        <FormItem>
          <Col xs={4}>Manufacture*</Col>
          <Col xs={5}>
            <Input id="manufacture" type="text" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Model*</Col>
          <Col xs={5}>
            <Input id="model" type="text" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Harga*</Col>
          <Col xs={5}>
            <Input id="price" type="text" />
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
            <Select id="type" required="required" value={1}>
              {type &&
                type.map(({ id, name }: DataType, key: number) => {
                  return (
                    <option key={key} id={key.toString()} value={id}>
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
            <Input id="capacity" type="text" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Transmission*</Col>
          <Col xs={5}>
            <Input type="text" id="transmission" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Description*</Col>
          <Col xs={5}>
            <Form.Control as="textarea" rows={3} id="description" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Available At*</Col>
          <Col xs={5}>
            <Input type="date" id="availableAt" />
          </Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Available</Col>
          <Col xs={5}>
            <Form.Check // prettier-ignore
              type="switch"
              id="available"
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
          <Col xs={5}>-</Col>
        </FormItem>
        <FormItem>
          <Col xs={4}>Update At</Col>
          <Col xs={5}>-</Col>
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
  );
};

export default CreateCar;
