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

type User = {
    email: string;
    password: string;
}

const RegistrationForm = () => {
    let history = useHistory();
    const [form] = Form.useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = async ({ email, password }: User) => {
        setLoading(true);

        try {
            await AuthService.register(email, password);
            await AuthService.login(email, password);
            history.push("/email-confirmation");
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
                <Alert message="Цей email вже використовується" type="error" className={styles.loginError} showIcon />
            }
            <Form
                form={form}
                name="registration"
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
                    rules={[
                        {
                            required: true,
                            message: 'Будь ласка, введіть пароль'
                        },
                        {
                            min: 6,
                            message: 'Мінімальна довжина 6 символів'
                        }
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Будь ласка, підтвердіть пароль',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Паролі не збігаються');
                            },
                        }),
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Повторіть пароль"
                    />
                </Form.Item>
                <Form.Item className={styles.submitContainer}>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton} loading={loading}>
                        Зареєструватись
                </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default RegistrationForm;