import React from 'react'
import heroImg from 'assets/images/heroImage.jpg'
import SiteContainer from 'components/SiteContainer'

import styles from './styles.module.scss'

function Hero() {
  return (
    <div className={styles.container}>
      <img src={heroImg} alt="" className={styles.image}/>
        <div className={styles.contentContainer}>
          <SiteContainer className={styles.contentWrapper}>
            <div className={styles.topText}>Hello, My Name Is Cody.</div>
            <div className={styles.bottomText}>I am a React.js developer from Cincinnati, Ohio.</div>
          </SiteContainer>
        </div>
    </div>
  )
}

export default Hero