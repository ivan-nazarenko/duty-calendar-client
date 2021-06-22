import React from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div
      className={styles.dev}
    >
      <span>Іван Назаренко</span>
      <a
        href="https://github.com/ivan-nazarenko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </a>
      <a
        href="mailto:nazarenkoivan@protonmail.com"
      >
        <MailOutlined />
      </a>
    </div>
  </footer>
);

export default Footer;