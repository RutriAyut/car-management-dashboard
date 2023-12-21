import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Acordion from '..';

describe('<Acordion />', () => {
	test('should render Acordion component correctlu', () => {
		render(<Acordion />);
		expect(screen.getByText(/Apa saja syarat yang dibutuhkan?/i)).toBeInTheDocument();
	});
});