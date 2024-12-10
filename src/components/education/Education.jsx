import { useState } from 'react';
import styles from './Education.module.css';
import Buddah from '/public/Buddah.jpg';
import Pereyro from '/public/Pereyro.jpg';
import Rimura from '/public/rimura.jpg';

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
					<p>Специальность: математик </p>
					<p>Квалификация: математик, преподаватель</p>
					<p>Годы обучения: 1984 - 1991</p>
					<img
						onClick={() => setIsClickedFirst(true)}
						className={isClickedFirst ? styles.bigImages : styles.images}
						src={Buddah}
					/>
				</div>

				<div className={styles.item}>
					<h2>Уральский Федеральный Университет</h2>
					<p>Специальность: математик </p>
					<p>Квалификация: математик, преподаватель</p>
					<p>Годы обучения: 1984 - 1991</p>
					<img
						onClick={() => setIsClickedSec(true)}
						className={isClickedSec ? styles.bigImages : styles.images}
						src={Rimura}
					/>
				</div>

				<div className={styles.item}>
					<h2>Уральский Федеральный Университет</h2>
					<p>Специальность: математик </p>
					<p>Квалификация: математик, преподаватель</p>
					<p>Годы обучения: 1984 - 1991</p>
					<img
						onClick={() => setIsClickedThird(true)}
						className={isClickedThird ? styles.bigImages : styles.images}
						src={Pereyro}
					/>
				</div>
			</div>
		</div>
	);
}
