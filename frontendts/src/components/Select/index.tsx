import React from 'react';
import Form from 'react-bootstrap/Form';
import { SelectProps } from '../Props';

function CustomSelect({ id, children, required, value }: SelectProps) {
	if (required) {
		return (
			<Form.Select id={id} required defaultValue={value}>
				{children}
			</Form.Select>
		);
	} else {
		return <Form.Select id={id}>{children}</Form.Select>;
	}
}

CustomSelect.defaultProps = {
	id: 'defaultSelect',
	required: '',
};

export default CustomSelect;
