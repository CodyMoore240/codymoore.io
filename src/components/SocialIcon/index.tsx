import React from 'react'

import styles from './styles.module.scss'
import ISvgIcon from '../../interfaces/ISvgIcon'

export interface ISocialIcon {
  url: string,
  icon: (classes: ISvgIcon) => React.ReactNode,
}

function SocialIcon({
  url,
  icon
}: ISocialIcon) {
  function getClasses() {
    return ({
      containerClass: styles.svg,
      bgClass: styles.background
    })
  }

  return (
    <a 
      className={styles.container} 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon(getClasses())}
    </a>
  )
}

export default SocialIcon