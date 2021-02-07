import React from 'react';
import styles from './Content.module.css';

type ContentProps = {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <main className={styles.content}>
            {children}
        </main>
    );
};

export default Content;