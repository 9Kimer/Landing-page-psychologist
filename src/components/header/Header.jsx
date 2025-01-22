import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<header className='Header__container'>
			<div className='Header__logo'>
				<a className='Header__logo_link' href='/'>
					Психолог Ольга Ермолаева
				</a>
			</div>

			<ul className='Header__menu'>
				<Link className='Header__link' to='/about-us'>
					<li className='Header__about'>Направления работы</li>
				</Link>

				<Link className='Header__link' to='/price'>
					<li className='Header__price'>Цены</li>
				</Link>

				<Link className='Header__link' to='/education'>
					<li className='Header__price'>Образование</li>
				</Link>

				<Link className='Header__link' to='/contacts'>
					<div className='Header__contact'>Записаться на приём</div>
				</Link>
			</ul>
		</header>
	);
}
