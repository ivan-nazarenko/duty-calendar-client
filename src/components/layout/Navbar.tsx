import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

type NavBarProps = {
    links: {
        title: string;
        link: string;
        icon: React.ReactNode;
    }[];
}

const NavBar = ({ links }: NavBarProps) => {
    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    links.map((item, i) => (
                        <li key={i}>
                            {item.icon}
                            <Link to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavBar;