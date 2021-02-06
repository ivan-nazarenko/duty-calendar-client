import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import styles from './AuthForm.module.css';
import AuthService from '../../services/auth.service';

const validationMessages = {
    types: {
        email: 'Введіть валідний email',
    }
}

type LoginData = {
    email: string;
    password: string;
}

const LoginForm = () => {
    let history = useHistory();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = async ({ email, password }: LoginData) => {
        setLoading(true);

        try {
            await  AuthService.login(email, password);
            history.push("/");
            window.location.reload();
        } catch {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <>
            {
                error &&
                <Alert message="Невірні дані, спробуйте ще раз" type="error" className={styles.loginError} showIcon />
            }
            <Form
                name="login"
                className={styles.loginForm}
                onFinish={onFinish}
                validateMessages={validationMessages}
                size="large"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Будь ласка, введіть email'
                        },
                        {
                            type: 'email'
                        }
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Будь ласка, введіть пароль' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item className={styles.submitContainer}>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton} loading={loading}>
                        Увійти
                </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;