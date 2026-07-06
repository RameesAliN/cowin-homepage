import React from 'react'
import styles from '../styles/sticking.module.css'

function Sticking() {
  return (<>
    <div className={`container-fluid w-100 fixed-bottom py-1 d-md-none ${styles.sticky_text}`}>
      <span>Book Your Slot</span>
    </div>
    <div className={styles.covid_support_badge}>
      <div className={styles.badge_icon}>
        <img src='Support.svg'/>
      </div>
      <div className="d-none d-md-block">
        Support For<br/>COVID-19
      </div>
    </div>
  </>)
}

export default Sticking
