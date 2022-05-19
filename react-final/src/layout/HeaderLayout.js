import React from "react";
import { Link } from "react-router-dom";

export default class HeaderLayout extends React.Component {
    constructor() {
        super();

        this.state = {
            URL: "www.thbs.com",
            name: "test"
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home Page </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user">User Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list">List Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/crud">CRUD Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reg">Registration Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login Page</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}