import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Text from '../Text';

import { node } from 'prop-types';
import { ChildrenProps } from '../Props';

const Jumbotron = ({ children }: ChildrenProps) => {
	return (
		<section id="home" className="topBg">
			<Container className="jumbotronMargin">
				<Row className="row gap-2 m-0">
					<Col className="align-self-center">
						<Text variant={5}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
						</Text>
						<div className="my-3">
							<Text margin="16px 0px">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
							</Text>
						</div>
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
