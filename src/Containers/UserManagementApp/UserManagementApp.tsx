import {useState} from "react";
import {User} from "../../types";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";


const UserManagementApp = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        setUsers(prevState => [...prevState, newUser]);
    };

    return (
        <>
            <div className="container text-white">
                <div className="row">
                    <div className="col-6">
                        <UserForm onSubmitFormToAddUser={addUser}/>
                    </div>
                    <div className="col-6">
                        <Users users={users}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserManagementApp;