import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"images/taiko.png"} alt={"Logo Taiko"} width="150" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <h2><NavLink className="nav-link badge rounded-pill text-bg-dark" aria-current="page" to={"/category/tablas"}>Tablas</NavLink></h2>
                                    </li>
                                    <li className="nav-item">
                                    <h2><NavLink className="nav-link badge rounded-pill text-bg-dark" to={"/category/ceviche"}>Ceviches</NavLink></h2>
                                    </li>
                                    <li className="nav-item">
                                    <h2><NavLink className="nav-link badge rounded-pill text-bg-dark" to={"/category/rolls"}>Rolls</NavLink></h2>
                                    </li>
                                    <li className="nav-item">
                                    <h2><NavLink className="nav-link badge rounded-pill text-bg-dark" to={"/category/wok"}>Woks</NavLink></h2>
                                    </li>
                                    <li className="nav-item">
                                    <h2><NavLink className="nav-link badge rounded-pill text-bg-dark" to={"/category/entradas"}>Entradas</NavLink></h2>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;