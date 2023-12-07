import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Text from "../Text";

import { node } from "prop-types";

const Jumbotron = ({ children }) => {
  return (
    <section id="home" className="topBg">
      <Container className="jumbotronMargin">
        <Row className="row gap-2 m-0">
          <Col className="align-self-center">
            <Text variant={5}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </Text>
            <Text margin="16px 0px" className="my-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </Text>
            {children}
          </Col>
          <Col>
            <Image src="https://i.ibb.co/JRPkmZT/img-car.png" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Jumbotron.propTypes = {
  children: node,
};

export default Jumbotron;
