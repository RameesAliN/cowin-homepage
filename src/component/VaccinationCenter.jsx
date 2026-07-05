"use client"
import React, { useState } from 'react'
import styles from '../styles/center.module.css'

function VaccinationCenter() {
  const [activeTab, setActiveTab] = useState('district') // 'district' | 'pin' | 'map'

  const tabs = [
    { key: 'district', label: 'By District' },
    { key: 'pin', label: 'By PIN' },
    { key: 'map', label: 'On the Map' },
  ]

  return (
    <section className={`pt-5`}>
      <div className={`d-flex flex-column align-items-center`}>
        <h2 className={`${styles.center_title} fw-bold px-2 pb-3`}>Search Your Nearest Vaccination Center</h2>
        <p className={styles.center_title_p}>Get a preview list of the nearest centers and check availability of vaccination slots</p>
        <h5 className={styles.center_title_h5}>Login to book your slot</h5>
        {/* tab */}
        <div className={`d-flex justify-content-center justify-content-md-evenly mt-4 fs-5 fw-bold ${styles.tab_row}`}>
          {tabs.map((tab) => (
            <a key={tab.key}
              role="button"
              className={`text-decoration-none px-4 px-md-5 pb-3 ${styles.tab_item} ${activeTab === tab.key ? styles.tab_item_active : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/*pillow distric*/}
      {activeTab === 'district' &&
        <div className={`d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4 ${styles.search_row}`}>
          <select className={styles.select_pill}>
            <option value="">Select Your State</option>
          </select >
          <select className={styles.select_pill}>
            <option value="">Select District</option>
          </select>
          <button className={styles.pill_button}>Search</button>
        </div>}

      {/*PIN PILLOW */}
      {activeTab === 'pin' &&
        <div className={`d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4 ${styles.pin_row}`}>
          <input className={styles.pin_pill} placeholder="Enter Your PIN" />
          <button className={styles.pin_button}>Search</button>
        </div>}

        {/* map pillow */}
      {activeTab==='map'  && 
         <div className={`d-flex justify-content-center align-items-center mt-4`}>
        <div className={`${styles.search_wrapper} position-relative`}>
          <input className={styles.map_pill} placeholder="Enter Your PIN" />
          <button class={`btn position-absolute ${styles.search_button}`} type="button"><i class="bi bi-search"></i></button>
        </div>
      </div>}

      {/*booking */}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5`}>
        <div className={`ps-4 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-1 ${styles.center_book}`}>
          <h2 className={`fw-bold pb-3`}>Free COVID Precaution Dose</h2>
          <p className={styles.center_book_p}>Now Precaution dose for 18-59 age group free at Government Vaccination Center.</p>
          <button className={styles.center_book_btn}>Book Your Slot</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-2'>
          <img src='free_covid_precaution_dose.svg' className='img-fluid'></img>
        </div>
        
      </div>
    </section>
  )
}

export default VaccinationCenter
