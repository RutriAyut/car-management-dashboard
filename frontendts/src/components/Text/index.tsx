import { styParagraf } from './style';
import { TextProps } from '../Props';

const Text = ({
	children,
	variant,
	weight,
	height,
	size,
	margin,
	color,
}: TextProps) => {
	switch (variant) {
	case 1:
		return (
			<p className={styParagraf({ weight, height, size, margin, color })}>
				{children}
			</p>
		);
	case 2:
		return (
			<p
				className={styParagraf({
					weight: 'reguler',
					height,
					size,
					margin,
					color,
				})}
			>
				{children}
			</p>
		);
	case 3:
		return (
			<p
				className={styParagraf({
					weight: 'bold',
					height: '24px',
					size: '16px',
					margin,
					color,
				})}
			>
				{children}
			</p>
		);
	case 4:
		return (
			<p
				className={styParagraf({
					weight: 'bold',
					height: '36px',
					size: '24px',
					margin,
					color,
				})}
			>
				{children}
			</p>
		);
	case 5:
		return (
			<p
				className={styParagraf({
					weight: 'bold',
					height: '150%',
					size: '36px',
					margin,
					color,
				})}
			>
				{children}
			</p>
		);
	case 6:
		return (
			<p
				className={styParagraf({
					weight,
					height,
					size,
					margin,
					color: '#fff',
				})}
			>
				{children}
			</p>
		);
	case 7:
		return (
			<p
				className={styParagraf({
					weight: 'bold',
					height: '150%',
					size: '36px',
					margin,
					color: '#fff',
				})}
			>
				{children}
			</p>
		);
	}
};

Text.defaultProps = {
	weight: 'light',
	height: '20px',
	size: '0.875rem',
	margin: '0px',
	color: '#000000',
	variant: 1,
};

export default Text;
