import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
	return (
		<footer className='Footer__container'>
			<div className='Footer__logo'>
				<a href='/'>Психолог Ольга Ермолаева</a>
			</div>
			<ul className='Footer__list'>
				<li>г.Екатеринбург, ул.Бебринская, 10А, офис 30</li>
				<li>
					E-mail: <a>olaller66@mail.ru</a>
				</li>
				<li>
					<a>Telegram</a>
				</li>
				<li>
					<a>WhatsApp</a>
				</li>
			</ul>

			<Link to='/contacts'>
				<button className='Footer__reg_btn'>Консультация</button>
			</Link>
		</footer>
	);
}
