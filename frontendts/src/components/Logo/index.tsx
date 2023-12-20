import './style.ts';
import { styLogo, styLogoAdmin } from './style.ts';
import { LogoProps } from '../Props/index.ts';

const Logo = ({ color, variant }: LogoProps) => {
	switch (variant) {
	case 1:
		return <div className={styLogo(color)}></div>;
	case 2:
		return <div className={styLogoAdmin}></div>;
	}
};

Logo.defaultProps = {
	color: '#0d28a6',
	variant: 1,
};

export default Logo;
