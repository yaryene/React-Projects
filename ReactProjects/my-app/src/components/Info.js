import React from 'react'
import profilePicture from '../assets/profile-picture.jpg';
import emailLogo from '../assets/email-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import styles from './Info.module.css';

export default function Info() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <img 
                src={profilePicture}
                className={styles.avator}/>
        </header>
        <div className={styles.bio}>
            <h1 className={styles.name}>Yared Yenealem</h1>
            <p className={styles.title}>Frontend Developer</p>
            <div className={styles.contacts}>
                <a 
                    href="mailto: yaredmgmt@gmail.com"
                    target="_blank"
                    className={`${styles.links} ${styles.email}`}>
                    <img 
                        className={styles.icons}
                        src={emailLogo}
                        />
                        Email
                </a>
                <a 
                    href="https://www.linkedin.com"
                    target="_blank"
                    className={`${styles.links} ${styles.linkedin}`}>
                    <img 
                        className={styles.icons}
                        src={linkedinLogo}
                        target="_blank"/>
                        Linkedin
                </a>
            </div>
        </div>
    </div>
  )
}
