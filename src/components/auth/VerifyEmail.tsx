import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import AuthService from '../../services/auth.service';

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
                    <Result
                        icon={<SmileOutlined />}
                        title="Email успішно підтверджено"
                        extra={
                            <Button type="primary">
                                <Link to="/">
                                    Увійти
                                </Link>
                            </Button>
                        }
                    /> :
                    <Result
                        status="error"
                        title="Не вдалося підтвердити email"
                        subTitle="Спробийте прейти за посиланням знову або створінь новий акаунт"
                        extra={[
                            <Button type="primary" key="console">
                                 <Link to="/">
                                    На головну
                                </Link>
                            </Button>,
                        ]}
                    />
            }
        </>
    );
};

export default VerifyEmail;