import styles from './Contacts.module.css';

export default function Contacts() {
	return (
		<div className={styles.container}>
			<p>По всем вопросам и запись на консультацию: +7908934432567 </p>

			<p>
				(
				<a className={styles.linka} href='https://wa.me/79049848543'>
					WhatsApp
				</a>
				,
				<a className={styles.linka} href='https://t.me/olaler'>
					Telegram
				</a>
				)
			</p>
		</div>
	);
}
