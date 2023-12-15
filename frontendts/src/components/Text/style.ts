import { css } from '@emotion/css';
import { MapStyleProps, StyParagrafProps } from '../Props';

const weightMapping: MapStyleProps = {
	light: '300',
	reguler: '400',
	bold: '700',
};

export const styParagraf = ({
	weight,
	height,
	size,
	margin,
	color,
}: StyParagrafProps) =>
	css({
		lineHeight: height,
		fontSize: size,
		fontWeight: weightMapping[weight],
		margin: margin,
		color: color,
	});
