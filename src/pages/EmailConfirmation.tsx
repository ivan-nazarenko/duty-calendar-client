import React from 'react';
import { MailOutlined, ExportOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './EmailConfirmation.module.css';
import AuthService from '../services/auth.service';


type EmailConfirmationProps = {
    email: string;
}

const EmailConfirmation = ({ email }: EmailConfirmationProps) => {
    return (
        <div className={styles.confirmationContainer}>
            <div className={styles.icon}>
                <MailOutlined />
            </div>
            <span>
                {`Посилання для підтвердження облікового запису було відправлено на ${email}`}
            </span>
            <Button
                type="default"
                onClick={() => AuthService.logout()}
            >
                Вийти
            </Button>
        </div>
    );
};

export default EmailConfirmation;