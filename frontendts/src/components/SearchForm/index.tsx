import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import Text from "../Text";
import Card from "../Cards/CarsMain";
import { carsBox, searchBox, searchContainer } from "./style";
import { useEffect, useState } from "react";
import { DataCars, DataTypes } from "../Props";

const API = "http://localhost:8000/cars";

function waktu() {
  const arr = [];
  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      arr.push(
        <option key={i} value={"T0" + i + ":00:00.000Z"}>
          0{i}.00
        </option>
      );
    } else {
      arr.push(
        <option key={i} value={"T" + i + ":00:00.000Z"}>
          {i}.00
        </option>
      );
    }
  }
  return arr;
}

const SearchForm = () => {
  //To get data cars
  const [loading, setloading] = useState<boolean>(true);
  const [data, setData] = useState<DataCars>([]);
  const [types, setType] = useState<DataTypes>([]);
  const [temp, setTemp] = useState<DataCars>([]);

  console.log({ data });

  useEffect(() => {
    setloading(true);
    if (data.length === 0) {
      fetch(API)
        .then((res) => res.json())
        .then((results) => {
          setData(results.getCars);
          setTemp(results.getCars);
          setType(results.getTypes);
          setloading(false);
        });
    }
    setloading(false);
  }, [data]);

  const handleOnSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      driver: { value: string };
      passanger: { value: number };
      date: { value: string };
      time: { value: string };
    };

    const driver = target.driver.value;
    const number = target.passanger.value;
    const date = target.date.value;
    const time = target.time.value;
    const datetime = date + time;
    const driverBoo = driver === "true" ? true : false;

    if (number) {
      const dataCar = temp.filter(
        (val) =>
          val.capacity >= number &&
          val.available_at >= datetime &&
          val.available === true &&
          val.driver === driverBoo
      );
      setData(dataCar);
    } else {
      const dataCar = temp.filter(
        (val) =>
          val.available_at >= datetime &&
          val.available === true &&
          val.driver === driverBoo
      );
      setData(dataCar);
    }
  };

  //Html
  return (
    <section id="search" className={searchContainer}>
      <Container className={searchBox}>
        <form onSubmit={handleOnSearch} style={{ width: "100%" }}>
          <Row style={{ width: "100%" }}>
            <Col>
              <Text>Tipe Driver</Text>
              <Select id="driver" required="required">
                <option value="true">Dengan Sopir</option>
                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
              </Select>
            </Col>
            <Col>
              <Text>Tanggal</Text>
              <Input type="date" id="date" required="required" />
            </Col>
            <Col>
              <Text>Waktu Jemput</Text>
              <Select id="time" required="required">
                <option value="">Pilih Waktu</option>
                {waktu()}
              </Select>
            </Col>
            <Col>
              <Text>Jumlah Penumpang (Opsional)</Text>
              <Input type="number" id="passanger" placeholder="2" />
            </Col>
            <Col xs={2}>
              <Button type="submit">Cari Mobil</Button>
            </Col>
          </Row>
        </form>
      </Container>
      <Container className={carsBox}>
        {loading && !data && <Spinner />}
        <Row style={{ gap: "10px" }}>
          {data &&
            data.map(
              (
                {
                  id,
                  manufacture,
                  model,
                  type,
                  rent_per_day,
                  description,
                  capacity,
                  transmission,
                  year,
                },
                key
              ) => {
                const getType = types.filter((val) => val.id === type)[0].name;
                return (
                  <Col key={key}>
                    <Card
                      id={id}
                      tittle={manufacture + " " + model + " / " + getType}
                      rentPerDay={rent_per_day}
                      description={description}
                      capacity={capacity}
                      transmission={transmission}
                      year={year}
                    ></Card>
                  </Col>
                );
              }
            )}
          {data && data.length === 0 ? (
            <Text variant={3}>Mobil tidak ditemukan</Text>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default SearchForm;
