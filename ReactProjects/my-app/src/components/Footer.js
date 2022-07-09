import React from 'react'
import styles from './Footer.module.css';
import twitterLogo from '../assets/twitter-logo.png';
import githubLogo from '../assets/github-logo.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a 
                    href="https://github.com"
                    className={styles.links}>
                    <img 
                        src={githubLogo}
                        className={styles.socialIcons} />
                </a>
                <a 
                    href="https://github.com"
                    className={styles.links}>
                    <img 
                        src={twitterLogo}
                        className={styles.socialIcons} />
                </a>
            </div>
        </footer>
    )
}
