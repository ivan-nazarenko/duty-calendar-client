import React from 'react';
import { MailOutlined } from '@ant-design/icons';

import styles from './EmailConfirmation.module.css';

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
        </div>
    );
};

export default EmailConfirmation;