import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from '..';

const links=[
	{ link: '/admin/cars', name: 'Cars' },
	{ link: '/admin/cars', name: 'List Cars' },
	{ link: '/admin/cars/create', name: 'Add New Car', active: 'active' },
];

describe('<Breadcrumb />', () =>{
	test('should render Breadcrumb component correctly', () =>{
		render(<Breadcrumb links={links}/>);
		expect(screen.getByText(/List Cars/i)).toBeInTheDocument();
	});
});