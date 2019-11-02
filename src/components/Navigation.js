import React from 'react';

export default class Navigation extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Webshop</a>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category 3</a>
                            </li>
                            
                            <form className="form-inline my-2 my-lg-0 justify-content-center">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </ul> 

                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shopping Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Wish List</a>
                            </li>
                            
                        </ul>
                    
                    </div>
                </nav>
            </div>
        )
    }
}