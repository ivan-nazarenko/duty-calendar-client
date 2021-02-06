import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/layout/Header';
import AuthService from '../services/auth.service';

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
        </>
    );
};

export default Home;