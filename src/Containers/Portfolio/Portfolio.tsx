import {Link, Outlet} from "react-router-dom";


const Portfolio = () => {
    return (
        <div className="container">
            <div className="d-flex gap-2">
                <Link className="btn btn-primary mb-5" to="user-app">User Management App</Link>
                {/*<Link className="btn btn-primary" to="UI">UI</Link>*/}
            </div>
            <Outlet/>
        </div>
    );
};

export default Portfolio;