import { Link } from 'react-router-dom';

import './Header.scss';
import logo from './fast-pace-logo.svg';

const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="header-wrap">
                    <a href="#" class="header-logo">
                        <img src={logo} alt="Fast Pace logo" />
                    </a>
                    <nav class="header-nav">
                        <ul class="header-list">
                            <li class="header-list-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="header-list-item">
                                <Link to="/">About</Link>
                            </li>
                            <li class="header-list-item">
                            <Link to="/catalog">Catalog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;