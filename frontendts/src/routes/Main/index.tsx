import { Routes, Route } from 'react-router-dom';

import LayoutMain from '../../components/Layout/Main';
import Home from './home';
import Search from './Search';
import Login from './login';
const Main = () => {
	return (
		<LayoutMain>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</LayoutMain>
	);
};

export default Main;
