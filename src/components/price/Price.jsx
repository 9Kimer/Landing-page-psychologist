import { useState } from 'react';
import { Link } from 'react-router-dom';
import { prices } from '../../data';
import './Price.css';

export default function Price() {
	const [isVisible, setIsVisible] = useState(false);

	const items = prices.map(item => (
		<div key={item.id} className='Price__item'>
			<h2>{item.name}</h2>
			<ul>
				<li>{item.type}</li>
				<li>{item.time}</li>
				<li>{item.price}</li>
			</ul>
			<div>
				<p
					onMouseEnter={() => setIsVisible(true)}
					onMouseLeave={() => setIsVisible(false)}
					className='Price__descr'
				>
					{item.details}
				</p>
				{isVisible && <div className='Price__details'>{item.detailsText}</div>}
			</div>
			<Link className='Price__link' to='/contacts'>
				<button className='Price__btn_reg'>{item.button}</button>
			</Link>
		</div>
	));

	return (
		<div className='Price__container'>
			<h1 className='Price__title'>Тарифы</h1>

			<div className='Price__items'>{items}</div>
		</div>
	);
}
