import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = ()=> {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-info px-5">
        <NavLink to='/' className="navbar-brand" >React 101</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
                <NavLink to='/' className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/projects' className="nav-link" >Projects</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to= '/signin' className="nav-link">Sign In</NavLink>
            </li>
            <li className="nav-item dropdown">
        </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;