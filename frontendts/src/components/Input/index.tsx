import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputProps } from '../Props';

function inputText({ type, placeholder, id, required, value }: InputProps) {
	if (required) {
		return (
			<Form.Control
				type={type}
				id={id}
				placeholder={placeholder}
				required
				defaultValue={value}
			/>
		);
	} else {
		return (
			<Form.Control
				type={type}
				id={id}
				placeholder={placeholder}
				defaultValue={value}
			/>
		);
	}
}

inputText.defaultProps = {
	type: 'Text',
	id: 'input',
	placeholder: 'placeholder',
	required: '',
	value: '',
};

export default inputText;
