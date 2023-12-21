import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CustomBtn from '..';

const ButtonProps = {
	// type: 'button',
	bgcolor: 'lime',
	color: 'white',
	border: 'unset',
	onClick: jest.fn(),
	width: 'auto',
	variant: 1,
};

describe('<CustomBtn />', () =>{
	test('should render button component correctly', ()=>{
		render(<CustomBtn variant={1} >Submit</CustomBtn>);
		expect(screen.getByText(/Submit/i)).toBeInTheDocument();
	});

	test('should be able to call onClick by using callback props', async () => {
		render(<CustomBtn {...ButtonProps}>Submit</CustomBtn>);

		await userEvent.click(await screen.findByTestId('buttonId1'));
		expect(ButtonProps.onClick).toHaveBeenCalled();
	});
});