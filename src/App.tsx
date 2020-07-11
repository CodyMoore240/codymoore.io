import React from 'react'
import 'assets/styles/base.module.scss'
import Header from 'components/Header'
import Hero from 'components/Hero'
import SiteContainer from 'components/SiteContainer'

function App() {
  return (
    <div>
      <SiteContainer>
        <Header></Header>
      </SiteContainer>
      <Hero></Hero>
      Here it is
    </div>
  )
}

export default App

