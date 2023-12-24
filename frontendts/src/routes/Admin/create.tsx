import Container from 'react-bootstrap/Container';
import CustomBreadcrumb from '../../components/Breadcrumb';
import Text from '../../components/Text';
import CreateCar from '../../components/Form/Cars/Create';

const CarsCreate = () => {
	return (
		<Container className="adminBg" style={{ width: '100%' }}>
			<CustomBreadcrumb
				links={[
					{ link: '/admin/cars', name: 'Cars' },
					{ link: '/admin/cars', name: 'List Cars' },
					{ link: '/admin/cars/create', name: 'Add New Car', active: 'active' },
				]}
			/>
			<Text variant={1} size="20px" weight="bold" height="30px">
        Add New Car
			</Text>
			<CreateCar />
		</Container>
	);
};

export default CarsCreate;
