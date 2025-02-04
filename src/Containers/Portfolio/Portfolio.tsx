import {Link, Outlet} from "react-router-dom";


const Portfolio = () => {
    return (
        <div className="container text-white">
            <h1 className="my-4">Please click on the button to see the work!!</h1>
            <div className="d-flex gap-3">
                <Link className="btn btn-secondary mb-5" to="user-app">User Management App</Link>
                <Link className="btn btn-secondary mb-5" to="UI">UI Work</Link>
            </div>
            <Outlet/>
            <hr/>
            <Link className="btn btn-warning mb-5" to="/">Back to the Home page</Link>
        </div>
    );
};

export default Portfolio;