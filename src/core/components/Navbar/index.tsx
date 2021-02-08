import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="row main-navbar">
            <div className="col-2">
                <Link to="/">
                    <h4 className="main-nav-text">Bootcamp DevSuperior</h4>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;