import { useState } from 'react';
import './Education.css';
import diplomaFake from '/public/diplomaFake.jpg';
import Cross from '/public/favicon-32x32.png';

export default function Education() {
	const [isClickedFirst, setIsClickedFirst] = useState(false);
	const [isClickedSec, setIsClickedSec] = useState(false);
	const [isClickedThird, setIsClickedThird] = useState(false);

	return (
		<div className='Education__container'>
			<h1 className='Education__title'>Моё Образование</h1>
			<div className='Education__items'>
				<div className='Education__item'>
					<h2>Уральский Федеральный Университет</h2>

					<div className='Education__item_details'>
						<p>Специальность: Клиническая психология </p>
						<p>Квалификация: Психолог, психотерапевт</p>
						<p>Годы обучения: 2023 - 2024</p>
					</div>

					<div className='Education__diploma_cross'>
						<img
							className={
								isClickedFirst ? 'Education__cross_active' : 'Education__cross'
							}
							onClick={() => setIsClickedFirst(false)}
							src={Cross}
						/>
						<img
							onClick={() => setIsClickedFirst(true)}
							className={
								isClickedFirst ? 'Education__bigImages' : 'Education__images'
							}
							src={diplomaFake}
						/>
					</div>
				</div>

				<div className='Education__item'>
					<h2>Московский Институт Психоанализа</h2>

					<div className='Education__item_details'>
						<p>Специальность: Психоанализ</p>
						<p>Квалификация: Психоаналитик</p>
						<p>Годы обучения: 2023-2025</p>
					</div>

					<div className='Education__diploma_cross'>
						<img
							className={
								isClickedSec ? 'Education__cross_active' : 'Education__cross'
							}
							onClick={() => setIsClickedSec(false)}
							src={Cross}
						/>
						<img
							onClick={() => setIsClickedSec(true)}
							className={
								isClickedSec ? 'Education__bigImages' : 'Education__images'
							}
							src={diplomaFake}
						/>
					</div>
				</div>

				<div className='Education__item'>
					<h2>Psychodemia</h2>

					<div className='Education__item_details'>
						<p>Специальность: КПТ психология </p>
						<p>Квалификация: Психолог в направлении КПТ</p>
						<p>Годы обучения: 2020-2024</p>
					</div>

					<div className='Education__diploma_cross'>
						<img
							className={
								isClickedThird ? 'Education__cross_active' : 'Education__cross'
							}
							onClick={() => setIsClickedThird(false)}
							src={Cross}
						/>
						<img
							onClick={() => setIsClickedThird(true)}
							className={
								isClickedThird ? 'Education__bigImages' : 'Education__images'
							}
							src={diplomaFake}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
