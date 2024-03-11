import { Button, DatePicker, Form, Input, Select, notification } from 'antd';

const Register = () => {
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};

	const onFinish = values => {
		console.log('Success:', values);

		fetch('http://127.0.0.1:1488/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(values),
		});

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
					offset: 3,
					span: 16,
				}}
				name='date'
				label='Дата рождения'
				rules={[
					{
						required: true,
					},
				]}
			>
				<DatePicker onChange={onChange} />
			</Form.Item>

			<Form.Item
				style={{ marginLeft: -19 }}
				wrapperCol={{
					offset: 7,
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
