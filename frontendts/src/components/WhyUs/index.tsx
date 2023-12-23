import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../Text';
import CardWhy from '../Cards/Why';
import { cardWrapper } from '../Cards/style';

const WhyUs = () => {
	return (
		<section id="whyus" className="mainMargin mtMargin">
			<Container>
				<Row className="mb-5">
					<div className="mo-center">
						<Text variant={4} margin="0px 0px 16px 0px">
              Why Us ?
						</Text>
					</div>
					<div className="mt-3 mo-center">
						<Text>Mengapa harus pilih Binar Car Rental?</Text>
					</div>
				</Row>
				<Row className={cardWrapper}>
					<Col className="p-0">
						<CardWhy
							icon="https://i.ibb.co/M2DygVP/icon-complete.png"
							title="Mobil Lengkap"
							text="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat"
						/>
					</Col>
					<Col className="p-0">
						<CardWhy
							icon="https://i.ibb.co/gVpjHCg/icon-price.png"
							title="Harga Murah"
							text="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain"
						/>
					</Col>
					<Col className="p-0">
						<CardWhy
							icon="https://i.ibb.co/dQ27MBn/icon-24hrs.png"
							title="Layanan 24 Jam"
							text="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu"
						/>
					</Col>
					<Col className="p-0">
						<CardWhy
							icon="https://i.ibb.co/QdHSKXm/icon-professional.png"
							title="Sopir Profesional"
							text=" Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default WhyUs;
