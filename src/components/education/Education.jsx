import { useState } from 'react';
import styles from './Education.module.css';
import diplomaFake from '/public/diplomaFake.jpg';

export default function Education() {
	const [isClickedFirst, setIsClickedFirst] = useState(false);
	const [isClickedSec, setIsClickedSec] = useState(false);
	const [isClickedThird, setIsClickedThird] = useState(false);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Моё Образование</h1>
			<div className={styles.items}>
				<div className={styles.item}>
					<h2>Уральский Федеральный Университет</h2>
					<p>Специальность: Клиническая психология </p>
					<p>Квалификация: Психолог, психотерапевт</p>
					<p>Годы обучения: 2023 - 2024</p>
					<img
						onClick={() => setIsClickedFirst(true)}
						className={isClickedFirst ? styles.bigImages : styles.images}
						src={diplomaFake}
					/>
				</div>

				<div className={styles.item}>
					<h2>Московский Институт Психоанализа</h2>
					<p>Специальность: Психоанализ</p>
					<p>Квалификация: Психоаналитик</p>
					<p>Годы обучения: 2023-2025</p>
					<img
						onClick={() => setIsClickedSec(true)}
						className={isClickedSec ? styles.bigImages : styles.images}
						src={diplomaFake}
					/>
				</div>

				<div className={styles.item}>
					<h2>Psychodemia</h2>
					<p>Специальность: КПТ психология </p>
					<p>Квалификация: Психолог в направлении КПТ</p>
					<p>Годы обучения: 2020-2024</p>
					<img
						onClick={() => setIsClickedThird(true)}
						className={isClickedThird ? styles.bigImages : styles.images}
						src={diplomaFake}
					/>
				</div>
			</div>
		</div>
	);
}
