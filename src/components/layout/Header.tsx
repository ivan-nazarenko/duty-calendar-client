import React from 'react';
import { Button } from 'antd';
import { CalendarOutlined, OrderedListOutlined, ExportOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import NavBar from './Navbar';

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
    return (
        <header className={styles.homeHeader}>
            <span className={styles.brand}>
                Duty Calendar
            </span>
            <NavBar links={links} />
            <span className={styles.user}>
                {email}
                <Button
                    size='large'
                    type="default"
                    icon={<ExportOutlined />}
                    onClick={onLogout}
                />
            </span>
        </header>
    );
};

export default Header;