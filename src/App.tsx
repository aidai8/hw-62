import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import AboutUs from "./Containers/AboutUs/AboutUs.tsx";
import Contacts from "./Containers/Contacts/Contacts.tsx";
import Portfolio from "./Containers/Portfolio/Portfolio.tsx";
import UserManagementApp from "./Containers/UserManagementApp/UserManagementApp.tsx";

const App = () => (
    <>
        <header className="mb-5">
            <Toolbar/>
        </header>
        <Routes>
            <Route
                path="/"
                element={(<Home/>)}
            />
            <Route
                path="/about-us"
                element={(<AboutUs/>)}
            />
            <Route
                path="/contacts"
                element={(<Contacts/>)}
            />
            <Route path="/portfolio" element={(<Portfolio/>)}>
                <Route path='user-app' element={(<UserManagementApp/>)}/>
            </Route>
            <Route path="*" element={(<h1>Page Not Found!!</h1>)}/>
        </Routes>
    </>
);

export default App
