import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LayoutMain from '../../components/Layout/Main';
import Home from './home';
import Search from './Search';
const Main = () => {
	return (
		<LayoutMain>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</LayoutMain>
	);
};

export default Main;
