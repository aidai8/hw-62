import {NavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <NavLink to='/' className="navbar-brand text-black fw-bold">Horror Movies of 2025</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-black">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about-us' className="nav-link text-black">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contacts' className="nav-link text-black">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio' className="nav-link text-black">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;