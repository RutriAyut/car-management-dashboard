import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Faq from '..';

describe('<Faq />', () => {
	test('should render Faq component correctlu', () => {
		render(<Faq />);
		expect(screen.getByText(/Frequently Asked Question/i)).toBeInTheDocument();
	});
});