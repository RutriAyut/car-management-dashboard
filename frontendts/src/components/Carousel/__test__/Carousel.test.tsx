import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '..';

describe('<Carousel />', () => {
	test('should render Carousel component correctlu', () => {
		render(<Carousel />);
		expect(screen.getByText(/User 32, Bromo/i)).toBeInTheDocument();
	});
});