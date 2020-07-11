import React from 'react'
import myFace from 'assets/images/codyFace.jpg'
import SocialIcon from 'components/SocialIcon'
import githubIcon from 'assets/svgIcons/gitHubIcon'
import linkedInIcon from 'assets/svgIcons/linkedInIcon'

import styles from './styles.module.scss'

function AboutMe() {
  function getLengthOfExperience() {
    const currentYear = new Date().getFullYear()
    return currentYear - 2012
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          <h2 className={styles.title}>About Me</h2>
          <p>I am a developer who is fascinated with the web and have over {getLengthOfExperience()} years of experience helping clients harness the power of the internet in unique and innovative ways. Whether it’s building an easily-maintainable and scalable front end, builing React.js applications, or connecting to your database and displaying your data, I create user-friendly sites that will help you effectively connect with your customers.</p>

          <p>I live in Cincinnati, Ohio with my wife, two children, and our Husky. I enjoy spending time with my family, playing Beer League hockey, hanging out with my friends, playing video games (I have a disturbing amount of hours in Europa Universalis 4), as well as listening to horrible music.</p>
          <div className={styles.iconsWrapper}>
            <SocialIcon
              url={`https://www.linkedin.com/in/cody-moore-aab56365/`}
              icon={linkedInIcon}
            ></SocialIcon>
            <SocialIcon
              url={`https://github.com/CodyMoore240`}
              icon={githubIcon}
            ></SocialIcon>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.myFace} src={myFace} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe