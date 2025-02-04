import {NavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <NavLink to='/' className="navbar-brand text-black fw-bold">Horror Movies of 2025</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto text-black">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about-us' className="nav-link">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio' className="nav-link">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;