import React, { useState } from 'react';
import { Button } from 'antd';
import { CalendarOutlined, OrderedListOutlined, ExportOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import NavBar from './Navbar';
import SideMenu from './SideMenu';

type HeaderProps = {
    email: string;
    onLogout: () => void;
};

const links = [
    {
        link: '/home/calendar',
        title: 'Календар',
        icon: <CalendarOutlined />
    },
    {
        link: '/home/list',
        title: 'Список',
        icon: <OrderedListOutlined />
    },
];

const Header = ({ email, onLogout }: HeaderProps) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const onMenuOpen = () => {
        setMenuVisible(true);
    };

    const onMenuClose = () => {
        setMenuVisible(false);
    }

    return (
        <header className={styles.homeHeader}>
            <Button
                className={styles.sideMenuButton}
                icon={<MenuOutlined />}
                size='large'
                onClick={onMenuOpen}
                type="link"
                color="black"
            />
            <span className={styles.brand}>
                DutyCalendar
            </span>
            <NavBar links={links} />
            <span className={styles.user}>
                {email}
                <Button
                    size='middle'
                    type="default"
                    icon={<ExportOutlined />}
                    onClick={onLogout}
                />
            </span>
            <SideMenu
                visible={isMenuVisible}
                onClose={onMenuClose}
                email={email}
                links={links}
                onLogout={onLogout}
            />
        </header>
    );
};

export default Header;