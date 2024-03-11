import { Button, ColorPicker, Modal } from 'antd';
import { useState } from 'react';
import Login from '../Login';
import Register from '../Register';
import styles from './Home.module.css';

const Home = () => {
	const [color, setColor] = useState('#333');

	const log = () => {
		Modal.confirm({
			title: 'Вход в Личный Кабинет',
			content: (
				<div style={{ marginLeft: -35 }}>
					<Login />
				</div>
			),
			footer: (_, { OkBtn, CancelBtn }) => <></>,
		});
	};

	const reg = () => {
		Modal.confirm({
			title: 'Регистрация',
			content: (
				<div style={{ marginLeft: -35 }}>
					<Register />
				</div>
			),
			footer: (_, { OkBtn, CancelBtn }) => <></>,
		});
	};

	const handleColorChange = newColor => {
		const hexColor = newColor.toHexString(); // Преобразование цвета в HEX
		setColor(hexColor); // Установка нового цвета
	};

	return (
		<main>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<div className={styles.logoBlock}>
						<h1 style={{ color: color }} className={styles.logo}>
							George
						</h1>
						<ColorPicker
							style={{ marginBottom: -7 }}
							value={color}
							onChange={handleColorChange} // Обработчик изменения цвета
							showText
						/>
					</div>
					<ul className={styles.nav}>
						<li className={styles.navItem}>
							<Button onClick={log}>Авторизация</Button>
						</li>
						<li className={styles.navItem}>
							<Button onClick={reg}>Регистрация</Button>
						</li>
					</ul>
				</div>
			</header>
		</main>
	);
};

export default Home;
