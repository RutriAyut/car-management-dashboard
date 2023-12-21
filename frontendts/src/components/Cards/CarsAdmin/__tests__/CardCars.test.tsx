import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CardCars from '..';
import userEvent from '@testing-library/user-event';

const CarsAdminProps = {
	tittle: 'Chevy Silverado / Convertible',
	id: 1,
	rentPerDay: 200000,
	updateAt: '2023-12-20T17:00:00.000Z',
	image: 'https://i.ibb.co/k5t0hKS/image-1.png'
};

describe('<Card />', () =>{
	test('should render correctly with given props for admin page', ()=>{
		render(
			<MemoryRouter>
				<CardCars {...CarsAdminProps}/>
			</MemoryRouter>
		);
		expect(screen.getByText(/200000/i)).toBeInTheDocument();
	});

	test.skip('should click url and redirect to wanted page', async () => {
		render (
			<MemoryRouter>
				<CardCars {...CarsAdminProps}/>
			</MemoryRouter>
		);
		const button = screen.getByTestId('buttonId1'); 
		console.log({button});
		// simulate button click
		userEvent.click(button); 
		expect(screen.getByText(/Edit Car/i)).toBeInTheDocument();
	});

	test('should be able to call onClickDelete', async () => {
		render(
			<MemoryRouter>
				<CardCars {...CarsAdminProps}/>
			</MemoryRouter>
		);
		const button = screen.getByTestId('buttonId2'); 
		// simulate button click
		userEvent.click(button); 
	});
});