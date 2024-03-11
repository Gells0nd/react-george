import { Button, Checkbox, Form, Input, notification } from 'antd'; // Импорт необходимых компонентов из библиотеки Ant Design
import React from 'react'; // Импорт React для создания компонента

// Определяем функциональный компонент Login, принимающий функцию changeStatus в качестве свойства
const Login = ({ changeStatus }) => {
	// Функция, вызываемая при успешном завершении входа
	const onFinish = values => {
		// Выводим в консоль успешные значения из формы
		console.log('Success:', values);

		// Отправляем данные на сервер
		fetch('http://127.0.0.1:1488/post', {
			method: 'POST', // Определяем метод запроса
			headers: {
				'Content-Type': 'application/json;charset=utf-8', // Устанавливаем заголовок для JSON-данных
			},
			body: JSON.stringify(values), // Преобразуем значения формы в JSON и отправляем
		});

		// Изменяем статус пользователя
		changeStatus();
	};

	// Функция, вызываемая при ошибке входа
	const onFinishFailed = errorInfo => {
		// Выводим в консоль информацию о неудачном входе
		console.log('Failed:', errorInfo);
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

	// Функция для открытия уведомления об успешном входе
	const openGoodNotification = type => {
		api[type]({
			message: 'Успешный вход!', // Заголовок уведомления
			description: 'Данные успешно ушли на сервер.', // Описание уведомления
		});
	};

	// Возвращаем JSX с формой для входа пользователя
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
			{/* Флажок "Запомнить меня" */}
			<Form.Item
				name='remember' // Имя поля флажка
				valuePropName='checked'
				wrapperCol={{
					offset: 7, // Отступ с левой стороны
					span: 16, // Ширина поля
				}}
			>
				<Checkbox>Запомнить меня</Checkbox> {/* Флажок "Запомнить меня" */}
			</Form.Item>
			{/* Кнопка для отправки формы */}
			<Form.Item
				wrapperCol={{
					offset: 9, // Отступ с левой стороны
					span: 16, // Ширина поля
				}}
			>
				<Button type='primary' htmlType='submit'>
					{' '}
					{/* Кнопка входа */}
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login; // Экспортируем компонент Login по умолчанию
