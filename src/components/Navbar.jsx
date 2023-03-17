import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <NavLink to="/" className="btn btn-danger">Inicio</NavLink>
                <NavLink to="/about" className="btn btn-success">About</NavLink>
                <NavLink to="/blog" className="btn btn-warning">Blog</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
