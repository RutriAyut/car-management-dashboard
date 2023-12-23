import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Why from '..';

const WhyProps = {
	icon:'https://i.ibb.co/M2DygVP/icon-complete.png',
	title:'Mobil Lengkap',
	text:'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
};

describe('<Why />',() =>{
	test('should render Why card component correctly', () => {
		render(<Why {...WhyProps} />);
		expect(screen.findByTestId('why'));
	});
});