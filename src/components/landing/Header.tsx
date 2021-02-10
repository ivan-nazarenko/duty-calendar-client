import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <span className={styles.brand}>
                DutyCalendar
            </span>
            <span className={styles.desc}>
                Керуйте чергуваннями з легкістю!
            </span>
        </header>
    );
};

export default Header;