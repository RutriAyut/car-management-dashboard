import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCars from "../../components/Cards/CarsAdmin";
import Breadcrumb from "../../components/Breadcrumb";
import Text from "../../components/Text";
import Button from "../../components/Button";

const API = "http://localhost:8000/cars";

function Cars() {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setloading(true);
    if (!data) {
      fetch(API)
        .then((res) => res.json())
        .then((results) => {
          setData(results);
          setloading(false);
        });
    }
    setloading(false);
  }, [data]);

  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate("/admin/cars/create");
  };

  return (
    <Container className="adminBg">
      <Row>
        <Breadcrumb
          link={[
            { link: "/admin/cars", name: "Cars" },
            { link: "/admin/cars", name: "List Cars" },
          ]}
        />
      </Row>
      <Row>
        <Col>
          <Text variant={4}>List Car</Text>
        </Col>
        <Col className="d-flex justify-content-end mb-3">
          <Button variant={3} onClick={handleOnClick}>
            <Text color="#fff" weight="bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 3.75V14.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 9H14.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add New Car
            </Text>
          </Button>
        </Col>
      </Row>
      {loading && !data && <Spinner />}
      <Row style={{ gap: "10px" }}>
        {data &&
          data.getCars.map(
            (
              { id, manufacture, model, type, image, rent_per_day },
              // { id, name, rent_per_day, image },
              key
            ) => {
              const getType = data.getTypes.filter((val) => val.id === type)[0]
                .name;
              const create = data.getLogs.filter((val) => val.id === id)[0]
                .create_at;
              const update = data.getLogs.filter((val) => val.id === id)[0]
                .update_at;

              return (
                <Col key={key}>
                  <CardCars
                    id={id}
                    tittle={manufacture + " " + model + " / " + getType}
                    rentPerDay={rent_per_day}
                    updateAt={update ? update : create}
                    image={image}
                  ></CardCars>
                </Col>
              );
            }
          )}
      </Row>
    </Container>
  );
}

export default Cars;
