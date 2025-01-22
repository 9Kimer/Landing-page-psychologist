import './Contacts.css';

export default function Contacts() {
	return (
		<div className='Contacts__section'>
			<div className='Contacts__container'>
				<div className='Contacts__text'>
					<p>По всем вопросам и запись на консультацию: +7908934432567 </p>

					<p>
						(
						<a className='Contacts__linka' href='https://wa.me/79049848543'>
							WhatsApp
						</a>
						,
						<a className='Contacts__linka' href='https://t.me/olaler'>
							Telegram
						</a>
						)
					</p>
				</div>
			</div>
		</div>
	);
}
