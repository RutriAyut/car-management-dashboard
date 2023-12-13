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

const API = "http://localhost:8000/cars";

function waktu() {
  const arr = [];
  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      arr.push(<option value={"T0" + i + ":00:00.000Z"}>0{i}.00</option>);
    } else {
      arr.push(<option value={"T" + i + ":00:00.000Z"}>{i}.00</option>);
    }
  }
  return arr;
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomBoolean() {
//   return Math.random() < 0.7;
// }

const SearchForm = () => {
  //To get data cars
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(null);
  const [types, setType] = useState(null);
  const [temp, setTemp] = useState(null);

  console.log({ data });

  useEffect(() => {
    setloading(true);
    if (!data) {
      fetch(API)
        .then((res) => res.json())
        .then((results) => {
          // const newResults = results.map((car) => {
          //   const driver = getRandomBoolean();

          //   //Random value for availableAt karena kalau tidak maka data yang didapat availablenya pada tanggal aplikasi dijalankan
          //   const isPositive = getRandomInt(0, 1) === 1;
          //   const timeAt = new Date();
          //   const mutator = getRandomInt(1000000, 100000000);
          //   const availableAt = new Date(
          //     timeAt.getTime() + (isPositive ? mutator : 1 * mutator)
          //   );
          //   return {
          //     ...car,
          //     availableAt,
          //     driver,
          //   };
          // });
          // setData(newResults);
          // setTemp(newResults);
          setData(results.getCars);
          setTemp(results.getCars);
          setType(results.getTypes);
          setloading(false);
        });
    }
    setloading(false);
  }, [data]);

  const handleOnSearch = async (e) => {
    e.preventDefault();

    const driver = e.target.driver.value;
    const number = e.target.passanger.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const datetime = date + time;

    if (number) {
      console.log({ number });
      const dataCar = temp.filter(
        (val) =>
          val.capacity >= number &&
          val.available_at >= datetime &&
          val.available === true &&
          val.driver === JSON.parse(driver)
      );
      setData(dataCar);
    } else {
      const dataCar = temp.filter(
        (val) =>
          val.available_at >= datetime &&
          val.available === true &&
          val.driver === JSON.parse(driver)
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
              <Input type="date" id="date" required={"required"} />
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
            console.log("ada")
          )}
        </Row>
      </Container>
    </section>
  );
};

export default SearchForm;
