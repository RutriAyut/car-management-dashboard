import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';

describe('<Footer />', () => {
	test('should render Footer component correctlu', () => {
		render(<Footer />);
		expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
	});
});