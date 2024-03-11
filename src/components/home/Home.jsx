import { Button, Modal } from 'antd';
import Login from '../Login';
import Register from '../Register';
import styles from './Home.module.css';

const Home = () => {
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

	return (
		<main>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<h1 className={styles.logo}>George</h1>
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
			{/* <Register /> */}
		</main>
	);
};

export default Home;
