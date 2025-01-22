import { examples } from '../../data';
import './About.css';

export default function About() {
	return (
		<div className='About__section'>
			<h1 className='About__title'>Примеры запросов, с которыми я работаю:</h1>
			<ul className='About__list'>
				{examples.map(example => (
					<li key={example.id} className='About__article'>
						{example.exampleText}
					</li>
				))}
			</ul>
		</div>
	);
}
