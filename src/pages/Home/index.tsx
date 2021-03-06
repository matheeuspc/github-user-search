import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <p className="home-content-title">Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</p>
        <p className="home-content-text"> Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: antforfigma@gmail.com</p>
        <Link to="/search">
            <ButtonIcon text="Começar" />
        </Link>

    </div>
);

export default Home;