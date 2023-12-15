import { css } from '@emotion/css';
import { MapStyleProps, StyButtonProps } from '../Props';

const colorMapping: MapStyleProps = {
	lime: '#5cb85f',
	danger: '#FA2C5A',
	white: '#FFFFFF',
	darkBlue: '#0D28A6',
};

export const styButton = ({ bgcolor, color, border, width }: StyButtonProps) =>
	css({
		backgroundColor: colorMapping[bgcolor],
		color: colorMapping[color],
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: '20px' /* 142.857% */,
		padding: '8px 12px',
		borderRadius: '2px',
		border: border,
		width: width,
	});
