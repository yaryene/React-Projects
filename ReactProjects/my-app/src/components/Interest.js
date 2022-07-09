import React from 'react'
import styles from './Interest.module.css';

export default function Interest() {
  return (
    <main className={styles.interest}>
        <h2 className={styles.header}>Interests</h2>
        <p className={styles.interest_texts}>
            Web accessibility, cloud environment, badmintorn, animation
            and tea lover.
        </p>
    </main>
  )
}
