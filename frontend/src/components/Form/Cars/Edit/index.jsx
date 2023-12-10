import { useNavigate, useParams } from "react-router-dom";
import { buttonForm, formBox } from "../style";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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

const EditCar = () => {
  const navigate = useNavigate();

  const handleOnCancel = (e) => {
    navigate("/admin/cars/");
  };

  const { id } = useParams();
  const API = "http://localhost:8000/cars/details/" + id;
  const [data, setData] = useState(null);

  const APIType = "http://localhost:8000/type";
  const [type, setType] = useState(null);

  const [driver, setDriver] = useState(false);
  const [available, setAvailable] = useState(false);

  console.log({ data });

  useEffect(() => {
    if (!type) {
      fetch(APIType)
        .then((res) => res.json())
        .then((results) => {
          setType(results);
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

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleOnChange = () => {
    setAvailable(!available);
  };

  const handleOnDriver = () => {
    setDriver(!driver);
  };

  const APIPUT = "http://localhost:8000/cars/update/" + id;
  const token = localStorage.getItem("token");

  const put = async (
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
    try {
      fetch(APIPUT, {
        method: "PUT",
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
          res.ok
            ? withReactContent(Swal).fire(
                {
                  position: "center",
                  icon: "success",
                  title: "Data Mobil Berhasil diupdate",
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
              <Input id="foto" type="file" value={data.filterById[0].picture} />
              <Text size="10px" height="14px">
                File size max. 2MB
              </Text>
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Tipe*</Col>
            <Col xs={5}>
              <Select id="type" required="required">
                {type &&
                  type.getTypes.map(({ id, name }, key) => {
                    let selected = "";
                    if (id === data.filterById[0].type) {
                      selected = "selected";
                    }
                    return (
                      <option key={key} value={id} selected={selected}>
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
                value={data.filterById[0].description}
              />
            </Col>
          </FormItem>
          <FormItem>
            <Col xs={4}>Available At*</Col>
            <Col xs={5}>
              <Input
                type="date"
                id="availableAt"
                value={data.filterById[0].date}
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
