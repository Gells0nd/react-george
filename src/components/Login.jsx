import { Button, Checkbox, Form, Input, notification } from 'antd';
import React from 'react';

const Login = ({ changeStatus }) => {
	const onFinish = values => {
		console.log('Success:', values);

		fetch('http://127.0.0.1:1488/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(values),
		});

		// Тут делаю новыый фетч запрос

		changeStatus();
		// openGoodNotification('success');
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
		openBadNotification('error');
	};

	const [api, contextHolder] = notification.useNotification();
	const openBadNotification = type => {
		api[type]({
			message: 'Ошибка!',
			description: 'Вы заполнили не все поля.',
		});
	};

	const openGoodNotification = type => {
		api[type]({
			message: 'Успешный вход!',
			description: 'Данные успешно ушли на сервер.',
		});
	};

	return (
		<Form
			name='basic'
			style={{
				maxWidth: 600,
				borderRadius: 9,
				margin: '20px auto',
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			{contextHolder}
			<Form.Item
				label='Логин'
				name='username'
				rules={[
					{
						required: true,
						message: 'Пожалуйста, введите ваше имя!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Пароль'
				name='password'
				rules={[
					{
						required: true,
						message: 'Пожалуйста, введите ваш пароль!',
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name='remember'
				valuePropName='checked'
				wrapperCol={{
					offset: 7,
					span: 16,
				}}
			>
				<Checkbox>Запомнить меня</Checkbox>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 9,
					span: 16,
				}}
			>
				<Button type='primary' htmlType='submit'>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;
