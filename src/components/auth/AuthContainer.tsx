import React from 'react';
import styles from './AuthContainer.module.css';
import { Typography } from 'antd';

const { Title } = Typography;

type AuthContainerProps = {
    title: string;
    children: React.ReactNode;
}

const AuthContainer = ({ title, children }: AuthContainerProps) => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.box}>
                <Title level={1}>
                    {title}
                </Title>
                {children}
            </div>
        </div>
    );
};

export default AuthContainer;