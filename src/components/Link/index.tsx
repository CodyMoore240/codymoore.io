import React from 'react'

import styles from './styles.module.scss'

export interface ILink {
  url: string,
  text: string
}

function Link({
  url,
  text
}: ILink) {
  return (
    <a className={styles.container} href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  )
}

export default Link