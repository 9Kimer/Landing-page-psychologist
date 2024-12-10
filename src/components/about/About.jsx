import { examples } from '../../data';
import styles from './About.module.css';

export default function About() {
	return (
		<div className={styles.section}>
			<h1 className={styles.title}>Примеры запросов, с которыми я работаю:</h1>
			<ul className={styles.ul}>
				{examples.map(example => (
					<li key={example.id} className={styles.list}>
						{example.exampleText}
					</li>
				))}
			</ul>
		</div>
	);
}
