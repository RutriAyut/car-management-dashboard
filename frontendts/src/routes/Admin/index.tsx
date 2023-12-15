import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LayoutAdmin from '../../components/Layout/Admin';
import Cars from './cars';
import CarsCreate from './create';
import CarsEdit from './edit';

const Admin = () => {
	return (
		<LayoutAdmin>
			<Routes>
				<Route path="/cars/" element={<Cars />} />
				<Route path="/cars/create" element={<CarsCreate />} />
				<Route path="/cars/edit/:id" element={<CarsEdit />} />
			</Routes>
		</LayoutAdmin>
	);
};

export default Admin;
