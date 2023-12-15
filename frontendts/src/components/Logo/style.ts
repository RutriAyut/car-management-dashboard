import { css } from '@emotion/css';

export const styLogo = (color: string) =>
	css({
		width: '100px!important',
		height: '34px!important',
		flexShrink: '0',
		background: color,
	});

export const styLogoAdmin = css({
	width: '34px',
	height: '34px',
	background: '#cfd4ed',
});
