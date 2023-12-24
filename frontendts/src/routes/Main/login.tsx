import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { bgLogin, bgLoginForm, loginBox } from './style';

import Logo from '../../components/Logo';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { PostLogin } from '../../components/Props';

const Login = () => {
	const API = 'https://api-bcr.fly.dev/user/signin';
	const [error, setError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const token = localStorage.getItem('token');
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoggedIn(!!token);
	}, [token]);

	useEffect(() => {
		isLoggedIn && navigate('/admin/cars');
	}, [isLoggedIn]);

	const post = async ({ email, password }: PostLogin) => {
		try {
			fetch(API, {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
				.then((res) => {
					if (res.status === 404) {
						throw new Error('Email Not Register');
					}
					if (res.status === 401) {
						throw new Error('Invalid Password');
					}
					return res.json();
				})
				.then((result) => {
					setError(false);
					setMessage(result.message);
					localStorage.setItem('token', result.token);
					localStorage.setItem('username', result.roleName);
				})
				.catch((err) => {
					setError(true);
					setMessage(err.message);
				});
		} catch (error) {
			setError(true);
		}
	};

	const handleOnSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

		const email = target.email.value;
		const password = target.password.value;

		await post({ email, password });
	};
	return (
		<Container bsPrefix={loginBox}>
			<Row>
				<Col className={bgLogin}></Col>
				<Col xs={4} className={bgLoginForm}>
					<form onSubmit={handleOnSubmit}>
						<Row style={{ gap: '32px', marginBottom: '32px' }}>
							<Logo variant={1} color="#CFD4ED" />
							<Text variant={4}>Welcome, Admin BCR</Text>
							{error !== null && (
								<Text weight="bold" color="#FA2C5A">
									{message}
								</Text>
							)}
						</Row>

						<Row style={{ gap: '9px', marginBottom: '16px' }}>
							<Text color="#222">Email</Text>
							<Input
								type="text"
								id="email"
								placeholder="Contoh: johndee@gmail.com"
							/>
						</Row>
						<Row style={{ gap: '9px', marginBottom: '32px' }}>
							<Text color="#222">Password</Text>
							<Input type="password" id="password" placeholder="6+ karakter" />
						</Row>
						<Row>
							<Button type="submit" variant={3}>
                Sign in
							</Button>
						</Row>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
