import { useNavigate } from 'react-router-dom';

import Jumbotron from '../../components/Jumbotron';
import Button from '../../components/Button';
import Service from '../../components/Service';
import WhyUs from '../../components/WhyUs';
import Testimonial from '../../components/Testimonial';
import Cta from '../../components/Cta';
import Faq from '../../components/Faq';

const Home = () => {
	const navigate = useNavigate();
	const handleOnSewa = () => {
		navigate('/search');
	};

	return (
		<>
			<Jumbotron>
				<Button onClick={handleOnSewa}>Mulai Sewa Mobil</Button>
			</Jumbotron>
			<Service />
			<WhyUs />
			<Testimonial />
			<Cta />
			<Faq />
		</>
	);
};

export default Home;
