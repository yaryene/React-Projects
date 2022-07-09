import React from 'react'
import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.about}>
        <h2 className={styles.header}>About</h2>
        <p className={styles.about_texts}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Numquam excepturi mollitia modi voluptatem distinctio, 
            cum iure vel omnis similique praesentium adipisci repudiandae 
            ad, sunt exercitationem aspernatur ea natus autem amet!
        </p>
    </main>
  )
}
