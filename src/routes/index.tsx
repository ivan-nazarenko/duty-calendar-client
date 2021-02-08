import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Result } from 'antd';
import VerifyEmail from '../components/auth/VerifyEmail';
import WithAuth from '../middlewares/WithAuth';
import Home from '../pages/Home';
import Landing from '../pages/Landing';

const index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route path="/email-confirmation">
                <WithAuth />
            </Route>
            <Route exact path="/verification/:code/:id">
                <VerifyEmail />
            </Route>
            <WithAuth>
                <Route path="/home">
                    <Home />
                </Route>
            </WithAuth>
            <Route to="*">
                <Result
                    status="404"
                    title="404"
                    subTitle="Сторінку не знайдено!"
                />,
            </Route>
        </Switch>
    );
};

export default index;