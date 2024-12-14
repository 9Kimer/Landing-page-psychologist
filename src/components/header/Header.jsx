import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header>
			<div className={styles.logo}>
				<a href='/'>Психолог Ольга Ермолаева</a>
			</div>

			<ul className={styles.menu}>
				<Link className={styles.link} to='/about-us'>
					<li className={styles.about}>Направления работы</li>
				</Link>

				<Link className={styles.link} to='/price'>
					<li className={styles.price}>Цены</li>
				</Link>

				<Link className={styles.link} to='/education'>
					<li className={styles.price}>Образование</li>
				</Link>

				<Link className={styles.link} to='/contacts'>
					<div className={styles.contact}>Записаться на приём</div>
				</Link>
			</ul>
		</header>
	);
}
