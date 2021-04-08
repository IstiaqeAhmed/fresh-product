import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import Edit from './Edit';
import Header from './Header';
import Manage from './Manage';


const Admin = () => {

    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-md">
                    <Link class="navbar-brand text-light" to="/home">𝐹𝓇𝑒𝓈𝒽 𝒱𝒶𝓁𝓁𝑒𝓎</Link>
                </div>
            </nav>
            <Header></Header>
            <div className="container d-flex justify-content-center">
                <div className="w-75 mt-4">
                    <Switch>
                        <Route exact path="/admin">
                            <Manage />
                        </Route>
                        <Route path="/admin/add">
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path="/admin/edit">
                            <Edit></Edit>
                        </Route>
                        <Route path="/admin/manage">
                            <Manage></Manage>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
};

export default Admin;