import React from 'react';
import Button from 'react-bootstrap/Button';
import { styButton } from './style';
import { ButtonProps } from '../Props';

const CustomBtn = ({
	bgcolor,
	color,
	border,
	width,
	variant,
	onClick,
	type,
	children,
}: ButtonProps) => {
	switch (variant) {
	case 1:
		return (
			<Button
				variant=""
				bsPrefix={styButton({ bgcolor, color, border, width })}
				onClick={onClick}
				type={type}
			>
				{children}
			</Button>
		);
	case 2:
		return (
			<Button
				variant=""
				bsPrefix={styButton({
					bgcolor: 'white',
					color: 'danger',
					border: '1px solid #FA2C5A',
					width,
				})}
				onClick={onClick}
				type={type}
			>
				{children}
			</Button>
		);

	case 3:
		return (
			<Button
				variant=""
				bsPrefix={styButton({ bgcolor: 'darkBlue', color, border, width })}
				onClick={onClick}
				type={type}
			>
				{children}
			</Button>
		);

	case 4:
		return (
			<Button
				variant=""
				bsPrefix={styButton({
					bgcolor: 'white',
					color: 'darkBlue',
					border: '1px solid #0D28A6',
					width,
				})}
				onClick={onClick}
				type={type}
			>
				{children}
			</Button>
		);
	}
};

CustomBtn.defaultProps = {
	type: 'button',
	bgcolor: 'lime',
	color: 'white',
	border: 'unset',
	onClick: () => {},
	width: 'auto',
	variant: 1,
};

export default CustomBtn;
