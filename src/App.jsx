import MainItem from './components/MainItem/MainItem';
import About from './components/about/About';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Price from './components/price/Price';
import './styles/flex.css';

export default function App() {
	return (
		<div className='App__container'>
			<Header className='App__item' />

			<MainItem className='App__item' />

			<About className='App__item' />

			<Price className='App__item' />

			<Education className='App__item' />

			<Footer className='App__item' />
		</div>
	);
}
