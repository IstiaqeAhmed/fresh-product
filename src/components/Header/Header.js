import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const isLogged = isLoggedIn();
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand fs-2 mx-4"  to="/home">𝐹𝓇𝑒𝓈𝒽 𝒱𝒶𝓁𝓁𝑒𝓎</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Home</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/orders"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Orders</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/admin"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Admin</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/deals"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Deals</p>
                        </li></Link>
                        {
                            loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark" onClick={signOut}>Sign Out, {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                                <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark">Login</button></Link>
                        }
                    </ul>
                    
    </div>
    </div>
 
</nav>
    );
};

export default Header;