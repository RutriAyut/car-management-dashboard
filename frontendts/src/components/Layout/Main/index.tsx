import Footer from '../../Footer';
import Menu from '../../Menu/MainMenu';
import { ChildrenProps } from '../../Props';

const LayoutMain = ({ children }: ChildrenProps) => {
	return (
		<>
			<Menu />
			{children}
			<Footer />
		</>
	);
};

export default LayoutMain;
