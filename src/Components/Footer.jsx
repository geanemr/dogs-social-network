import React from 'react'
import styles from './Footer.module.css'
import dogs from "../Assets/dogs-footer.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={dogs} alt="Dogs" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer