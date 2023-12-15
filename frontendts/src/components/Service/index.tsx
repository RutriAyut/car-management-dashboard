import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Text from '../Text';
import { iconCheck, iconWrapper } from './style';

const icon = () => {
	return (
		<Image src="https://i.ibb.co/2SgTXKr/check.png" className={iconCheck} />
	);
};

const Service = () => {
	return (
		<section id="ourservice" className="mainMargin mtMargin">
			<Container>
				<Row className="gap-5">
					<Col>
						<Image src="https://i.ibb.co/BwRGks1/img-service.png" />
					</Col>
					<Col>
						<Text variant={4}>
              Best Car Rental for any kind of trip in (Lokasimu)!
						</Text>
						<Text margin="24px 0px 0px 0px">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
						</Text>
						<div className={iconWrapper}>
							<Row>
								<Col xs={1}>{icon()}</Col>
								<Col>
									<Text>Sewa Mobil Dengan Supir di Bali 12 Jam</Text>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>{icon()}</Col>
								<Col>
									<Text>Sewa Mobil Lepas Kunci di Bali 24 Jam</Text>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>{icon()}</Col>
								<Col>
									<Text>Sewa Mobil Jangka Panjang Bulanan</Text>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>{icon()}</Col>
								<Col>
									<Text>Gratis Antar - Jemput Mobil di Bandara</Text>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>{icon()}</Col>
								<Col>
									<Text>Layanan Airport Transfer / Drop In Out</Text>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Service;
