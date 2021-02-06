import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import Header from '../components/landing/Header';
import { useHistory } from 'react-router-dom';
import styles from './Landing.module.css';
import LoginForm from '../components/auth/LoginForm';
import RegistrationForm from '../components/auth/RegistrationForm';
import AuthService from '../services/AuthService';

const { TabPane } = Tabs;

const Landing = () => {
    const history = useHistory();

    useEffect(() => {
        if(AuthService.getCurrentUser()) {
            history.push('/home');
        }
    }, []);

    return (
        <div className={styles.landingContainer}>
            <Header />
            <main className={styles.landingMain}>
                <Tabs defaultActiveKey="1" className={styles.authTabs} size='large'>
                    <TabPane tab="Вхід" key="1">
                        <LoginForm />
                    </TabPane>
                    <TabPane tab="Реєстрація" key="2">
                        <RegistrationForm />
                    </TabPane>
                </Tabs>
            </main>
        </div>
    );
};

export default Landing;