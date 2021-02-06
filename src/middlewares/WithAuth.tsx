import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import EmailConfirmation from '../pages/EmailConfirmation';
import AuthService from '../services/AuthService';

type AuthProps = {
    children?: React.ReactNode;
}

const WithAuth = ({ children }: AuthProps) => {
   const user = AuthService.getCurrentUser();

    let content = null;

    if (user && user.verified) {
        content = children;
    } else if (user) {
        content = <EmailConfirmation email={user.email} />
    } else {
        content = <Redirect to="/" />
    }

    return (
        <>
            {
                content
            }
        </>
    );
};

export default WithAuth;