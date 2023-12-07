import { useNavigate } from "react-router-dom";
import { buttonForm, formBox } from "../style";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

import Input from "../../../Input";
import Text from "../../../Text";
import Button from "../../../Button";
import Select from "../../../Select";

const CreateCar = () => {
  const navigate = useNavigate();

  const handleOnCancel = (e) => {
    navigate("/admin/cars/");
  };

  const APIType = "http://localhost:8000/type";
  const [type, setType] = useState(null);

  console.log({ type });

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

  const post = async (name, rent, picture, type) => {
    const total = JSON.stringify(name, rent, type);
    try {
      fetch(API, {
        method: "POST",
        body: JSON.stringify(name, rent, type),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr });
        });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleOnSave = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const rent = e.target.price.value;
    const file = e.target.foto.files[0];
    const type = e.target.type.value;

    const picture = new FormData();

    picture.append("File", file);

    console.log({ name, rent, picture, type });
    await post({ name, rent, picture, type });
  };

  return (
    <form onSubmit={handleOnSave}>
      <div className={formBox} style={{ width: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col xs={4}>Nama*</Col>
          <Col xs={5}>
            <Input id="name" type="text" />
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
