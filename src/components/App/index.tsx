import React from 'react'
import 'assets/styles/base.module.scss'
import Header from 'components/Header'
import Hero from 'components/Hero'
import SiteContainer from 'components/SiteContainer'
import Footer from 'components/Footer'
import AboutMe from 'components/AboutMe'

import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <SiteContainer>
        <Header></Header>
      </SiteContainer>
      <Hero></Hero>
      <SiteContainer>
        <div className={styles.contentWrapper}>
          <AboutMe></AboutMe>
        </div>
      </SiteContainer>
      <Footer></Footer>
    </div>
  )
}

export default App

