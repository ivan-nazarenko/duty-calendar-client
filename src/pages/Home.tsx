import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';
import AuthService from '../services/auth.service';
import List from './List';
import Calendar from './Calendar';
import Footer from '../components/layout/Footer';
import styles from './Home.module.css';

const Home = () => {
    const history = useHistory();
    const user = AuthService.getCurrentUser();

    const onLogout = () => {
        AuthService.logout();
        localStorage.clear();
        history.push('/');
        window.location.reload();
    };

    return (
        <div className={styles.layout}>
            <Header email={user.email} onLogout={onLogout} />
            <Content>
                <Switch>
                    <Route path="/home/calendar">
                        <Calendar />
                    </Route>
                    <Route path="/home/list">
                        <List />
                    </Route>
                </Switch>
            </Content>
            <Footer />
        </div>
    );
};

export default Home;