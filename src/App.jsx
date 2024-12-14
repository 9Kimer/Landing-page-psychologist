import MainItem from './components/MainItem/MainItem';
import About from './components/about/About';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Price from './components/price/Price';
import styles from './styles/flex.module.css';

export default function App() {
	return (
		<div className={styles.container}>
			<Header className={styles.item} />

			<MainItem className={styles.item} />

			<About className={styles.item} />

			<Price className={styles.item} />

			<Education className={styles.item} />

			<Footer className={styles.item} />
		</div>
	);
}
