import React from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import styles from './SideMenu.module.css';
import { ExportOutlined } from '@ant-design/icons';

type SideMenuProps = {
    visible: boolean;
    email: string;
    onLogout: () => void;
    onClose: () => void;
    links: {
        title: string;
        link: string;
        icon: React.ReactNode;
    }[];
};

const SideMenu = ({ visible, email, onLogout, onClose, links }: SideMenuProps) => {
    return (
        <Drawer
            title={
                <span className={styles.brand}>
                    DutyCalendar
                </span>
            }
            visible={visible}
            onClose={onClose}
            closable={true}
            placement="left"
            width='300'
        >
            <ul className={styles.sideNav}>
                {
                    links.map((item, i) => (
                        <li key={i}>
                            {item.icon}
                            <Link to={item.link} onClick={onClose}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
                <li className={styles.logOut} key={links.length}>
                    <div>
                        {email}
                    </div>
                    <span onClick={onLogout}>
                        <ExportOutlined />
                        Вийти
                    </span>
                </li>
            </ul>
        </Drawer>
    );
};

export default SideMenu;