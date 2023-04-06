import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.scss';
import logo from './fast-pace-logo.svg';

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header-wrap">
                    <Link to="/" className="header-logo">
                        <img src={logo} alt="Fast Pace logo" />
                    </Link>
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li className="header-list-item">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="header-list-item">
                                <HashLink to="/#about">О сайте</HashLink>
                            </li>
                            <li className="header-list-item">
                            <Link to="/catalog">Каталог</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;