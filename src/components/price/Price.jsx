import { useState } from 'react';
import { Link } from 'react-router-dom';
import { prices } from '../../data';
import styles from './Price.module.css';

export default function Price() {
	const [isVisible, setIsVisible] = useState(false);

	const items = prices.map(item => (
		<div key={item.id} className={styles.item}>
			<h2>{item.name}</h2>
			<ul>
				<li>{item.type}</li>
				<li>{item.time}</li>
				<li>{item.price}</li>
			</ul>
			<div>
				<p
					onMouseEnter={() => setIsVisible(true)}
					onMouseLeave={() => setIsVisible(false)}
					className={styles.descr}
				>
					{item.details}
				</p>
				{isVisible && <div className={styles.details}>{item.detailsText}</div>}
			</div>
			<Link className={styles.link} to='/contacts'>
				<button className={styles.btn_reg}>{item.button}</button>
			</Link>
		</div>
	));

	return (
		<div className={styles.container}>
			<h1>Тарифы</h1>

			<div className={styles.items}>{items}</div>
		</div>
	);
}
