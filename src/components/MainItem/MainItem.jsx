import styles from './MainItem.module.css';
import Mum from '/public/Mum.jpg';

export default function MainItem() {
	return (
		<div className={styles.main}>
			<img src={Mum} />
			<div>
				<h1>Консультации</h1>
				<p className={styles.quote}>
					Разовые консультации и длительная психотерапия для детей, подростков,
					взрослых и пар
				</p>
				<p className={styles.reg}>Записаться на консультацию</p>
				<div className={styles.li}>
					<ul>
						<li>Тел. +79049848543</li>
						<li>
							<a className={styles.link} href='https://wa.me/79049848543'>
								WhatsApp
							</a>
						</li>
						<li>
							<a className={styles.link} href='https://t.me/olaler'>
								Telegram
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
