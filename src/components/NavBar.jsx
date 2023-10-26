import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light">MALIA CHO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav position-absolute start-50 translate-middle mt-5">
                        <Link className="nav-link active text-light" aria-current="page" href="#">home</Link>
                        <Link className="nav-link text-light " href="#">about me</Link>
                        <Link className="nav-link text-light" href="#">projects</Link>
                        <Link className="nav-link text-light" href="#">contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;