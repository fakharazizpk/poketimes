import React from 'react'
import {NavLink ,Link, withRouter} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
const Navbar =(props) =>{
    
    return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a className="brand-logo">PokeTimes</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
    )
}

export default withRouter(Navbar)
