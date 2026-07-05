import React from 'react'
import styles from '../styles/largestVacinationDrive.module.css'

function LargestVacinationDrive() {
  return (
    <section className={`pt-5 px-3 ${styles.vacination_drive}`}> 
      <h2 className='text-center fw-bold'>India is running the world’s largest vaccination drive</h2>
      <div className={`pt-4 row flex-md-row`}>
        <div className="col-md-4 ps-5 d-flex flex-column">
          <span className={`${styles.vacination_drive_status_text}`}>Vaccines Delivered</span>
          <span className={`py-2 mb-4 mt-2 ${styles.vacination_drive_status}`}>+ 0</span>
          <span className={`${styles.vacination_drive_status_text}`}>Citizens Fully Vaccinated</span>
          <span className={`py-2 mb-4 mt-2 ${styles.vacination_drive_status}`}><b>0 </b> +0</span>
          <span className={`${styles.vacination_drive_status_text}`}>% of Fully Vaccinated</span>
          <b className={`py-2 mb-4 mt-2 ${styles.vacination_drive_status}`}>0%</b>
        </div>

        <div className='col-md-4'>
        <img src='Screenshot 2026-07-06 012956.png' className='img-fluid'></img>
        </div>

        <div className='col-md-4 pt-5'>
          <button className={`small ${styles.vacination_drive_button}`}>View Vaccination Dashboard</button>
        </div>
      </div>
    </section>
  )
}

export default LargestVacinationDrive
