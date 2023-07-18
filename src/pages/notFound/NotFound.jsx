import './notFound.module.scss'
import Header from "../../components/header/Header.jsx";
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='css.notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}