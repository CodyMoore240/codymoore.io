import React from 'react'
import SiteContainer from 'components/SiteContainer'
import Link from 'components/Link'

import styles from './styles.module.scss'

function Footer() {
  function getYear() {
    return new Date().getFullYear()
  }

  return (
    <footer className={styles.container}>
      <SiteContainer>
        <div className={styles.text}>
          © {getYear()} codyMoore.io - Bulit with <Link
            url={`https://reactjs.org/`}
            text={`React`}
          ></Link>. Check out the source <Link
            url={`https://github.com/CodyMoore240/codymoore.io`}
            text={`code`}
          ></Link>.
          {/* Design by <Link
            url={`https://twitter.com/lspraue`}
            text={`@lspraue`}
          ></Link>. */}
        </div>
      </SiteContainer>
    </footer>
  )
}

export default Footer