import React from 'react'
import styles from '../styles/whatisnwe.module.css'
import Image from 'next/image';


function WhatIsNew() {
  const items = [
    { id: '01', text: 'New feature to report side effects after covid-19 vaccination.', highlight: true },
    { id: '02', text: 'Early administration of a precaution dose of covid-19 vaccine prior to the prescribed time interval to the persons intending to undertake international travel.' },
    { id: '03', text: 'Covovax vaccine for Children' },
    { id: '04', text: 'Vaccination Certificate download now available in regional languages.' },
    { id: '05', text: 'Slot booking now open for booster dose at private centers.' },
    { id: '06', text: 'New CoWIN dashboard analytics released for state health officers.' },
    { id: '07', text: 'ABHA health ID linking now mandatory for new registrations.' },
  ];
  const items2 = [
    { id: '08', text: 'HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose' },
    { id: '09', text: 'Vaccine available for age group 15-18 yrs' },
    { id: '10', text: 'New feature to Share Your Vaccination Status' },
    { id: '11', text: 'HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose' },
    { id: '12', text: 'Vaccine available for age group 15-18 yrs' },
    { id: '13', text: 'New feature to Share Your Vaccination Status' },
    { id: '14', text: 'HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose' },

  ]

  return (
    <section className={`pt-5 d-flex flex-column align-items-center ${styles.main}`}>
      <h3 className={`fw-bold ${styles.main_h3}`}>What's new on Co-WIN ?</h3>
      <div className='row w-100 pt-5 d-flex flex-column align-items-center flex-md-row'>

        <div className='col-md-9'>
          <div className='row'>

            <div className='d-none d-md-flex col-md-6'>
              <div className={styles.col_scroll}>
                {items.map((item) => <NewsCard key={item.id} item={item} />)}
              </div>
            </div>

            <div className='d-none d-md-flex col-md-6'>
              <div className={styles.col_scroll}>
                {items2.map((item) => <NewsCard key={item.id} item={item} />)}
              </div>
            </div>
          </div>
        </div>


        <div className={`col-6 col-md-3 ${styles.image2}`}>
          <img src="what's_new_on_cowin.svg" className={`img-fluid`}></img>
        </div>
        
        {/*for mobile only*/}
        <div className='d-md-none col-12 pt-3'>
          <div className={`px-3 ${styles.col_scroll}`}>
            {items.map((item) => <NewsCard key={item.id} item={item} />)}
            {items2.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsNew

function NewsCard({ item }) {
  return (<div className={`mb-5 ${styles.card}`}>
    <div className={styles.card_col1}>
      <div className={styles.imageWrapper}>
        <img src="numbering.svg" alt="Numbering" className={styles.card_img} />
        <span className="badge">
          {item.id}
        </span>
      </div>
      <p className={`fw-bold ps-2 ${styles.card_text}`}>{item.text}
      </p>
    </div>
    <button className={styles.card_button}>
      ▼
    </button>
  </div>
  )
}