import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CardCars from '..';

const CarsMainProps = {
	tittle: 'Chevy Silverado / Convertible',
	id: 1,
	description:'Rear window defroster. High performance suspension. 1.8L DOHC 16-valve I4 engine -inc: engine cover.',
	capacity: 6,
	transmission: 'Automanual',
	year: 2021,
	rentPerDay: 200000
};

describe('<Card />', () =>{
	test('should render correctly with given props for admin page', ()=>{
		render(
			<MemoryRouter>
				<CardCars {...CarsMainProps}/>
			</MemoryRouter>
		);
		expect(screen.getByText(/200000/i)).toBeInTheDocument();
	});
});