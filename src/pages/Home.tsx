import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';
import ListForm from '../components/list/ListForm';
import AuthService from '../services/auth.service';
import List from './List';
import Calendar from './Calendar';

const Home = () => {
    const history = useHistory();
    const user = AuthService.getCurrentUser();

    const onLogout = () => {
        AuthService.logout();
        history.push('/');
    };

    return (
        <>
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
        </>
    );
};

export default Home;