import React from 'react';
import '../styles/navbar.css'

const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/project1">Swipes</a></li>
                    <li><a href="/project1/listViewPage">All movies</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;