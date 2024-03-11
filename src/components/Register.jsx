import { Button, DatePicker, Form, Input, Select, notification } from 'antd'; // Импортируем необходимые компоненты из библиотеки Ant Design

// Определяем функциональный компонент Register
const Register = () => {
	// Функция обработки изменения даты в DatePicker
	const onChange = (date, dateString) => {
		console.log(date, dateString); // Выводим в консоль выбранную дату
	};

	// Функция обработки успешной отправки формы
	const onFinish = values => {
		console.log('Success:', values); // Выводим в консоль успешные значения из формы

		// Отправляем данные на сервер
		fetch('http://127.0.0.1:1488/post', {
			method: 'POST', // Определяем метод запроса
			headers: {
				'Content-Type': 'application/json;charset=utf-8', // Устанавливаем заголовок для JSON-данных
			},
			body: JSON.stringify(values), // Преобразуем значения формы в JSON и отправляем
		});

		// Выводим уведомление об успешной отправке данных
		openGoodNotification('success');
	};

	// Функция обработки ошибки при отправке формы
	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo); // Выводим в консоль информацию о неудачной отправке формы
		// Выводим уведомление об ошибке
		openBadNotification('error');
	};

	// Используем хук уведомлений из библиотеки Ant Design
	const [api, contextHolder] = notification.useNotification();

	// Функция для открытия уведомления об ошибке
	const openBadNotification = type => {
		api[type]({
			message: 'Ошибка!', // Заголовок уведомления
			description: 'Вы заполнили не все поля.', // Описание уведомления
		});
	};

	// Функция для открытия уведомления об успешной отправке данных
	const openGoodNotification = type => {
		api[type]({
			message: 'Успешный вход', // Заголовок уведомления
			description: 'Данные отправлены.', // Описание уведомления
		});
	};

	// Возвращаем JSX с формой для регистрации пользователя
	return (
		<Form
			name='basic' // Устанавливаем имя формы
			style={{
				maxWidth: 600, // Максимальная ширина формы
				borderRadius: 9, // Скругление углов формы
				margin: '20px auto', // Отступы формы
			}}
			initialValues={{
				remember: true, // Начальные значения формы
			}}
			onFinish={onFinish} // Обработчик успешного завершения отправки формы
			onFinishFailed={onFinishFailed} // Обработчик ошибки при отправке формы
			autoComplete='off' // Отключаем автозаполнение
		>
			{contextHolder} {/* Вывод уведомлений с помощью хука contextHolder */}
			{/* Поле ввода для логина */}
			<Form.Item
				label='Логин' // Надпись над полем ввода
				name='username' // Имя поля ввода
				rules={[
					// Правила валидации
					{
						required: true, // Поле обязательно для заполнения
						message: 'Пожалуйста, введите ваше имя!', // Сообщение об ошибке
					},
				]}
			>
				<Input /> {/* Поле ввода */}
			</Form.Item>
			{/* Поле ввода для пароля */}
			<Form.Item
				label='Пароль' // Надпись над полем ввода
				name='password' // Имя поля ввода
				rules={[
					// Правила валидации
					{
						required: true, // Поле обязательно для заполнения
						message: 'Пожалуйста, введите ваш пароль!', // Сообщение об ошибке
					},
				]}
			>
				<Input.Password /> {/* Поле ввода пароля */}
			</Form.Item>
			{/* Выпадающий список для выбора пола */}
			<Form.Item
				name='gender' // Имя поля выпадающего списка
				label='Пол' // Надпись над полем
				rules={[
					// Правила валидации
					{
						required: true, // Поле обязательно для выбора
					},
				]}
			>
				<Select placeholder='Выберите ваш пол' allowClear>
					{' '}
					{/* Выпадающий список */}
					{/* Опции для выбора пола */}
					<Select.Option value='male'>Мужчина</Select.Option>
					<Select.Option value='female'>Женщина</Select.Option>
					<Select.Option value='other'>Боевой вертолет МИ-4</Select.Option>
				</Select>
			</Form.Item>
			{/* Поле выбора даты рождения */}
			<Form.Item
				wrapperCol={{
					offset: 3, // Отступ с левой стороны
					span: 16, // Ширина поля
				}}
				name='date' // Имя поля выбора даты
				label='Дата рождения' // Надпись над полем
				rules={[
					// Правила валидации
					{
						required: true, // Поле обязательно для выбора
					},
				]}
			>
				<DatePicker onChange={onChange} />{' '}
				{/* Поле выбора даты с обработчиком onChange */}
			</Form.Item>
			{/* Кнопка для отправки формы */}
			<Form.Item
				style={{ marginLeft: -19 }} // Стилизуем кнопку
				wrapperCol={{
					offset: 7, // Отступ с левой стороны
					span: 16, // Ширина поля
				}}
			>
				<Button type='primary' htmlType='submit'>
					{/* Кнопка регистрации */}
					Зарегистрироваться
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Register; // Экспортируем компонент Register по умолчанию
