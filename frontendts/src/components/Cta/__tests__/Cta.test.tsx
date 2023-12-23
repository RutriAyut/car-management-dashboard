import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Cta from '..';
import { MemoryRouter } from 'react-router-dom';

describe('<Cta />', () => {
	test('should render Cta component correctlu', () => {
		render(<MemoryRouter><Cta /></MemoryRouter>);
		expect(screen.getByText(/Mulai Sewa Mobil/i)).toBeInTheDocument();
	});
});