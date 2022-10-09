import Avatar from '../Avatar';
import './styles.css';
import Logo from '../../assets/img/logo.svg';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link-text" aria-current="page" href="/">
                                    <img src={Logo} className="me-5 d-none d-sm-block" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link-text" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link-text mx-4" href="/criar-rotina">Crie sua Rotina</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link-text" href="/acompanhar-rotina">Acompanhe sua rotina</a>
                            </li>
                        </ul>
                        <div>
                            <Avatar className="" />
                        </div>
                        {/* <Avatar /> */}
                    </div>
                </div>
            </nav>
            <div className="alertt text-center">
                {/* EI MIGUEL EU VOU COMER O TEU ANEL */}
            </div>
        </>

    )
}