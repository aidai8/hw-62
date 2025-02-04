import React, {useState} from "react";
import {User, UserMutation} from "../../../../types";

interface Props {
    onSubmitFormToAddUser: (newUser: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmitFormToAddUser}) => {
    const [form, setForm] = useState<UserMutation>({
        name: "",
        email: "",
        isActive: false,
        role: "user"
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitFormToAddUser({ ...form, id: String(Math.random()) });
    };

    return (
        <form onSubmit={onSubmit}>
            <h4>Add new user</h4>
            <hr />
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={inputChangeHandler}
                    required
                />
            </div>

            <div className="form-group mt-4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={inputChangeHandler}
                    required
                />
            </div>

            <div className="form-check mt-4 mb-4">
                <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    className="form-check-input"
                    checked={form.isActive}
                    onChange={checkboxChangeHandler}
                />
                <label className="form-check-label" htmlFor="isActive">
                    Active
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    name="role"
                    className="form-control"
                    value={form.role}
                    onChange={inputChangeHandler}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add</button>
        </form>
    );
};

export default UserForm;