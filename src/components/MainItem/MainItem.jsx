import './MainItem.css';
import Mum from '/public/Mum.jpg';

export default function MainItem() {
	return (
		<div className='MainItem__main'>
			<img className='MainItem__photo' src={Mum} />
			<div>
				<h1 className='MainItem__title'>Консультации</h1>
				<p className='MainItem__quote'>
					Разовые консультации и длительная психотерапия для детей, подростков,
					взрослых и пар
				</p>
				<p className='MainItem__reg'>Записаться на консультацию</p>
				<div className='MainItem__list'>
					<ul className='MainItem__list_text'>
						<li>Тел. +79049848543</li>
						<li>
							<a className='MainItem__link' href='https://wa.me/79049848543'>
								WhatsApp
							</a>
						</li>
						<li>
							<a className='MainItem__link' href='https://t.me/olaler'>
								Telegram
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
