import css from './navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className={css.nav_list}>
                {/* <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}> */}
                <li>    
                    <NavLink className={css.navlink} to='/Kasa/'>
                        Accueil
                    </NavLink>
                </li>
                {/* <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}> */}
                <li>    
                    <NavLink className={css.navlink} to='/about'>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}