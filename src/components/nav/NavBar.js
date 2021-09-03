import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className= "navbar__item">
                <Link className="navbar__Link" to="/customers">Customers</Link>
            </li>
            <li className= "navbar__item">
                <Link className="navbar__Link" to="/tickets">Service Tickets</Link>
            </li>
        </ul>
    )
}
