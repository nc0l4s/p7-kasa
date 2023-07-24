import css from './card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className={css.gallery_card}>
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}