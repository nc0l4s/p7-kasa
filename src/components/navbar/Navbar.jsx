import css from './navbar.scss'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
               
                <li>    
                    <NavLink to='/'>
                        Accueil
                    </NavLink>
                </li>
                
                <li>    
                    <NavLink to='/about'>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}