import React from 'react'
import styles from '../styles/footer2.module.css'
import Image from 'next/image'

function FooterTwo() {
  return (
    <div className={`d-flex flex-column flex-md-row justify-content-md-between px-5 align-items-center py-3 ${styles.footertwo}`}>
      <p className={`order-3 pt-1 ${styles.text}`}>Copyright © 2021 Co-WIN. All Rights Reserved</p>
      <div className='pt-3 order-1'>
        <Image src="/national-health-authority.jpg" width={80} alt="l" height={50}/>
        <Image src="/undp-logo-vertical.svg" width={120} alt="k" height={50}/>
      </div>
      <div className={`pt-3 d-flex gap-3 order-2 `}>
        <p className={styles.text}>Terms of Service </p>
        <p className={`ps-3 border-start ${styles.text}`}>Privacy Policy</p>
      </div>
    </div>
  )
}

export default FooterTwo
