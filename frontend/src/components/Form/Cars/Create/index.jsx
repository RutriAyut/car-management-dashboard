import { useNavigate } from "react-router-dom";
import { buttonForm, formBox } from "../style";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

import Input from "../../../Input";
import Text from "../../../Text";
import Button from "../../../Button";
import Select from "../../../Select";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CreateCar = () => {
  const navigate = useNavigate();
  const handleOnCancel = (e) => {
    navigate("/admin/cars/");
  };

  const APIType = "http://localhost:8000/type";
  const [type, setType] = useState(null);

  useEffect(() => {
    if (!type) {
      fetch(APIType)
        .then((res) => res.json())
        .then((results) => {
          setType(results);
        });
    }
  }, [type]);

  const API = "http://localhost:8000/cars/create";
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const token = localStorage.getItem("token");

  const post = async (
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
    driver
  ) => {
    const total = JSON.stringify(rent, type);
    try {
      fetch(API, {
        method: "POST",
        body: JSON.stringify(
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
          driver
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          console.log({ res });
          res.ok
            ? withReactContent(Swal).fire(
                {
                  position: "center",
                  icon: "success",
                  title: "Data Mobil Berhasil disimpan",
                  showConfirmButton: false,
                  timer: 1500,
                },
                setTimeout(() => {
                  navigate("/admin/cars");
                }, 1500)
              )
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

  const handleOnSave = async (e) => {
    e.preventDefault();

    const manufacture = e.target.manufacture.value;
    const model = e.target.model.value;
    const rent = e.target.price.value;
    const file = e.target.foto.files[0];
    const type = e.target.type.value;
    const capacity = e.target.capacity.value;
    const transmission = e.target.transmission.value;
    const description = e.target.description.value;
    const availableAt = e.target.availableAt.value;

    const picture = new FormData();

    picture.append("File", file);

    console.log({
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
      <div className={formBox} style={{ width: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Manufacture*</Col>
          <Col xs={5}>
            <Input id="manufacture" type="text" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Model*</Col>
          <Col xs={5}>
            <Input id="model" type="text" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Harga*</Col>
          <Col xs={5}>
            <Input id="price" type="text" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Foto*</Col>
          <Col xs={5}>
            <Input id="foto" type="file" />
            <Text size="10px" height="14px">
              File size max. 2MB
            </Text>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Tipe*</Col>
          <Col xs={5}>
            <Select id="type" required="required">
              {type &&
                type.getTypes.map(({ id, name }, key) => {
                  return (
                    <option id={key} value={id}>
                      {name}
                    </option>
                  );
                })}
            </Select>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Capacity*</Col>
          <Col xs={5}>
            <Input id="capacity" type="text" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Transmission*</Col>
          <Col xs={5}>
            <Input type="text" id="transmission" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Description*</Col>
          <Col xs={5}>
            <Form.Control as="textarea" rows={3} id="description" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Available At*</Col>
          <Col xs={5}>
            <Input type="date" id="availableAt" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Available</Col>
          <Col xs={5}>
            <Form.Check // prettier-ignore
              type="switch"
              id="available"
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Driver</Col>
          <Col xs={5}>
            <Form.Check // prettier-ignore
              type="switch"
              id="driver"
              onChange={handleOnDriver}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Start Rent</Col>
          <Col xs={5}>-</Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Finish Rent</Col>
          <Col xs={5}>-</Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Create At</Col>
          <Col xs={5}>-</Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Update At</Col>
          <Col xs={5}>-</Col>
        </Row>
      </div>
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
