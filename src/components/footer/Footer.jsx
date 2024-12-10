import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
			<footer className={styles.container}>
				<div className={styles.logo}>
					<a href='/'>ПсихоМама</a>
				</div>
				<ul className={styles.list}>
					<li>г.Екатеринбург, ул.Бебринская, 10А, офис 30</li>
					<li>
						E-mail: <a>olaller66@mail.ru</a>
					</li>
					<li>
						<a>Telegram</a>
					</li>
					<li>
						<a>WhatsApp</a>
					</li>
				</ul>

				<Link to='/contacts'>
					<button className={styles.reg_btn}>Консультация</button>
				</Link>
			</footer>
		</>
	);
}
