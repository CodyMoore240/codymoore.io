import React from 'react'

import styles from './styles.module.scss'

export interface ILogo {
  text: string
}

function Logo({ 
  text 
}: ILogo) {
  return (
    <div className={styles.container}>
      <svg x="0px" y="0px" viewBox="0 0 200.8 183.3" className={styles.svg}>
        <rect x="3.4" className={styles.box} width="200.8" height="183.3" />
        <g>
          <path className={styles.bracket} d="M63.6,71.8c0,11.9-3.6,17.5-13.8,19.8c10.2,2.5,13.8,8.1,13.8,19.9v19.9c0,7.7,3.1,10.7,14.5,10.7v21.1H67c-21.4,0-28.8-6.1-28.8-23.1v-30.5c0-5.3-1.8-7.2-6.1-7.2h-6.4V80.7h6.4c4.3,0,6.1-1.8,6.1-7.1V43c0-17,7.4-22.9,28.8-22.9h11V41c-11.4,0-14.5,3-14.5,10.7V71.8z"/>
          <path className={styles.bracket} d="M181.8,102.4h-6.3c-4.4,0-6.3,2-6.3,7.2v30.5c0,17-7.4,23.1-28.8,23.1h-10.9v-21.1c11.2,0,14.5-3,14.5-10.7v-19.9c0-11.9,3.5-17.5,13.8-19.8c-10.4-2.5-13.8-8.1-13.8-19.9V51.7c0-7.7-3.3-10.7-14.5-10.7V20.1h10.9c21.4,0,28.8,5.9,28.8,22.9v30.6c0,5.3,1.8,7.1,6.3,7.1h6.3V102.4z"/>
        </g>
      </svg>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Logo