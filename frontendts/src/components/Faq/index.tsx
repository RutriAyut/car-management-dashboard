import Container from 'react-bootstrap/Container';
import Text from '../Text';
import Accordion from '../Accordion';

const Faq = () => {
	return (
		<section id="faq" className="mtMargin mainMargin">
			<Container className="p-0">
				<div className="row">
					<div className="col">
						<Text variant={4}>Frequently Asked Question</Text>
						<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
					</div>
					<div className="col">
						<Accordion />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Faq;
