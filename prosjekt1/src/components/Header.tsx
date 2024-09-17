import React from 'react';
import '../styles/Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Swipes</a></li>
                    <li><a href="/project1/listViewPage">All recipes</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;