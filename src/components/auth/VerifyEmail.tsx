import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import AuthService from '../../services/AuthService';

type VerificationData = {
    code: string;
    id: string;
}

const VerifyEmail = () => {
    const { code, id } = useParams<VerificationData>();
    const [isVerified, setVerified] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                await AuthService.verifyEmail(code, id);
                setVerified(true);
            } catch {
                setVerified(false);
            }
        })();
    }, []);


    return (
        <>
            {
                isVerified ?
                    <Redirect to="/calendar" /> :
                    <h1></h1>
            }
        </>
    );
};

export default VerifyEmail;