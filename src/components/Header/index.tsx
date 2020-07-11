import React from 'react'
import Logo from 'components/Logo'

import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <Logo
        text={`codymoore.io`}
      ></Logo>
    </header>
  )
}

export default Header