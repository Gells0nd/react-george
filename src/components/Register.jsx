import { Button, Form, Input, notification, Select } from 'antd';

const Register = () => {
	const onFinish = values => {
		console.log('Success:', values);
		openGoodNotification('success');
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
			message: 'Успешный вход',
			description: 'Данные отправлены.',
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
				name='gender'
				label='Пол'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select placeholder='Выберите ваш пол' allowClear>
					<Select.Option value='male'>Мужчина</Select.Option>
					<Select.Option value='female'>Женщина</Select.Option>
					<Select.Option value='other'>Боевой вертолет МИ-4</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 9,
					span: 16,
				}}
			>
				<Button type='primary' htmlType='submit'>
					Зарегистрироваться
				</Button>
			</Form.Item>
		</Form>
	);
};
export default Register;
