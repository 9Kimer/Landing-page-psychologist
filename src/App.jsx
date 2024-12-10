import MainItem from './components/MainItem/MainItem';
import About from './components/about/About';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Price from './components/price/Price';

export default function App() {
	return (
		<>
			<Header />

			<MainItem />

			<About />

			<Price />

			<Education />

			<Footer />
		</>
	);
}
