import React from 'react'

import styles from './styles.module.scss'

function AboutMe() {
  function getLengthOfExperience() {
    const currentYear = new Date().getFullYear()
    return currentYear - 2012
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <p>I am a developer who is fascinated with the web and have over {getLengthOfExperience()} years of experience helping clients harness the power of the internet in unique and innovative ways. Whether it’s building an easily-maintainable and scalable front end, builing React.js applications, or connecting to your database and displaying your data, I create user-friendly sites that will help you effectively connect with your customers.</p>

      <p>I live in Cincinnati, Ohio with my wife, two children, and our Husky. I enjoy spending time with my family, playing Beer League hockey, hanging out with my friends, playing video games (I have a disturbing amount of hours in Europa Universalis 4), as well as listening to horrible music.</p>
    </div>
  )
}

export default AboutMe