import React from 'react'

import styles from './styles.module.scss'

export interface ISiteContainer {
  children: React.ReactNode,
  className?: string
}

function SiteContainer({
  children,
  className
}: ISiteContainer) {
  return (
    <div className={`${styles.container} ${className ? className : ``}`}>{children}</div>
  )
}

export default SiteContainer