import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { carsBody, carsCard } from "../style";
import Text from "../../Text";
import Button from "../../Button";
import { useState } from "react";

function CardCars({ tittle, rentPerDay, id }) {
  const [deleteCar, setDeleteCar] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = ({ id }) => {
    console.log({ id });
    navigate("/admin/cars/edit/" + id);
  };

  const handleOnDelete = ({ id }) => {
    const API = "http://localhost:8000/cars/" + id;

    fetch(API, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((results) => {
        setDeleteCar(results);
      });

    console.log({ deleteCar });
  };
  return (
    <Card className={carsCard}>
      <Card.Img variant="top" src="https://i.ibb.co/k5t0hKS/image-1.png" />
      <Card.Body className={carsBody}>
        <Text variant={3}>{tittle}</Text>
        <Text variant={3}>Rp. {rentPerDay} / hari</Text>
        <Row>
          <Col xs={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.9167 6.25L15.8333 3.33333M17.5 1.66666L15.8333 3.33333L17.5 1.66666ZM9.49168 9.675C9.92197 10.0996 10.264 10.605 10.4981 11.1623C10.7323 11.7196 10.8538 12.3177 10.8559 12.9222C10.8579 13.5267 10.7403 14.1256 10.5099 14.6844C10.2796 15.2433 9.9409 15.751 9.51347 16.1785C9.08604 16.6059 8.57828 16.9445 8.01943 17.1749C7.46058 17.4053 6.86168 17.5229 6.25721 17.5209C5.65274 17.5188 5.05463 17.3973 4.49734 17.1631C3.94005 16.929 3.43457 16.5869 3.01002 16.1567C2.17512 15.2922 1.71315 14.1345 1.72359 12.9327C1.73404 11.731 2.21606 10.5814 3.06585 9.73166C3.91563 8.88188 5.06519 8.39985 6.26693 8.38941C7.46866 8.37897 8.62642 8.84094 9.49085 9.67583L9.49168 9.675ZM9.49168 9.675L12.9167 6.25L9.49168 9.675ZM12.9167 6.25L15.4167 8.75L18.3333 5.83333L15.8333 3.33333L12.9167 6.25Z"
                stroke="#8A8A8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Col>
          <Col>
            <Text>Start rent - Finish rent</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 10C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z"
                stroke="#8A8A8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="#8A8A8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Col>
          <Col>Updated at 4 Apr 2022, 09.00</Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant={2}
              width="100%"
              onClick={() => handleOnDelete({ id })}
            >
              Delete
            </Button>
          </Col>
          <Col>
            <Button onClick={() => handleOnClick({ id })} width="100%">
              Edit
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardCars;
