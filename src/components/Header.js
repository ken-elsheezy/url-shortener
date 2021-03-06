import React from 'react';


/**
 * This component displays the Navbar 
 */
const Header = () => {
    return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button className="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Kenvin's URL Shortener</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/saved">Saved Links</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;