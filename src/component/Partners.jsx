import React from 'react'
import styles from '../styles/partners.module.css'

function Partners() {
  return (
    <section className={`pt-5 ${styles.main}`}>
      <h2 className='fw-bold text-center'>Our Partners</h2>
      <div className='row pt-5'>

        <div className="px-5 px-md-0 col-md-3">
          <img src='partners_page.svg' className='img-fluid'/>
        </div >

        <div className='col-md-8 col-lg-9 pe-lg-5'>
          <div className='row px-4 px-md-0'>
            <div className='col-12 col-md-6 d-flex gap-4'>
               <div className={styles.image_wrapper}> <img src='digilocker_new_Logo.svg' className='img-fluid'/></div>
               <div className={styles.image_wrapper}><img src='umang_new_logo.svg' className='img-fluid'/></div>  
            </div>
            <div className='col-12 col-md-6 d-flex gap-4'>
               <div className={styles.image_wrapper}> <img src='arogya_setu_logo1.svg' className='img-fluid'/></div>
               <div className={styles.image_wrapper}><img src='my_gov_new_logo.svg' className='img-fluid'/></div>  
            </div>
           <div className='col-12 px-4 pt-5 gap-sm-5 d-flex justify-content-between justify-content-sm-center'>
            <button className={`${styles.view_button}`}>View More</button>
            <button className={styles.register_button}> Register As Partner</button>
           </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Partners
