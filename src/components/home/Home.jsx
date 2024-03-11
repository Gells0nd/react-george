import { Button, ColorPicker, Modal } from 'antd';
import React, { useState } from 'react';
import Login from '../Login';
import Register from '../Register';
import styles from './Home.module.css';

const Home = () => {
	const [status, setStatus] = useState(false);
	const [color, setColor] = useState('#333');

	const handleColorChange = newColor => {
		const hexColor = newColor.toHexString();
		setColor(hexColor);
	};

	const changeStatus = () => {
		setStatus(true);
	};

	const log = () => {
		Modal.confirm({
			title: 'Вход в Личный Кабинет',
			content: (
				<div style={{ marginLeft: -35 }}>
					<Login changeStatus={changeStatus} />
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

	return (
		<main>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<div className={styles.logoBlock}>
						<h1
							onClick={() => console.log(status)}
							style={{ color: color }}
							className={styles.logo}
						>
							George
						</h1>
						<ColorPicker
							style={{ marginBottom: -7 }}
							value={color}
							onChange={handleColorChange}
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
