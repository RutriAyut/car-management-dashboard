import Container from 'react-bootstrap/Container';
import Text from '../Text';
import Carousel from '../Carousel';

const Testimonial = () => {
	return (
		<section id="testimonial" className="mainMargin mtMargin">
			<Container className="p-0">
				<div className="containerCenter">
					<Text variant={4}>Testimonial</Text>
					<Text margin="16px 0px 0px 0px">
            Berbagai review positif dari para pelanggan kami
					</Text>
				</div>
				<Carousel />
			</Container>
		</section>
	);
};

export default Testimonial;
