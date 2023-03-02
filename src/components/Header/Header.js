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
                                <a href="#">Home</a>
                            </li>
                            <li class="header-list-item">
                                <a href="#">About</a>
                            </li>
                            <li class="header-list-item">
                                <a href="#">Catalog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;