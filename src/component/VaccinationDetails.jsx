import React from 'react'
import styles from '../styles/vacinationDetails.module.css'

function VaccinationDetails() {
  return (
    <section>

      {/* report */}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5 ${styles.report}`}>
        <div className={`px-4  ps-sm-4 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-2 ${styles.center_book}`}>
          <h2 className={`fw-bold pb-3`}>Report Side Effect</h2>
          <p className={styles.center_book_p}>
            Report Side Effect
            If you have experienced any side effect after COVID-19 vaccination, it can be reported on Co-WIN using your registered mobile number.</p>
          <button className={styles.center_book_btn}>Report Now</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-1'>
          <img src='reports-aefi.svg' className='img-fluid'></img>
        </div>
      </div>

      {/*children */}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5 `}>
        <div className={`px-sm-4 px-md-5 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-1 ${styles.children}`}>
          <h2 className={`fw-bold pb-3`}>Children Vaccination</h2>
          <ul className={`px-5 px-sm-3 px-md-0 ${styles.children_p}`}>
            <li>Covovax vaccine is now available for Children of the age group 12+ yrs in Private Vaccination Center. The time span between first and second dose of Covovax is 21 days. Children can be administered with the second dose of Covovax within a month.
            </li>
            <li>Children of the age group 12-14 yrs are now eligible for the Corbevax vaccine in Government Vaccination Center and in Private Vaccination Center 12+ yrs. The period between a first and second dose of Corbevax is 28 days.
            </li>
            <li>
              Covaxin is available for Children of the age group of 15+ yrs in both Government and Private Vaccination Center. Children must be completed 4 to 6 weeks after administration of the first dose of Covaxin to take the second dose of Covaxin. Both online and walk-in are available.
            </li>
          </ul>
          <button className={styles.children_btn}>Book Your Slot</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-2'>
          <img src='Children_Vaccination.svg' className='img-fluid'></img>
        </div>
      </div>

      {/*correction date*/}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5 ${styles.date_div}`}>
        <div className={`px-4  ps-sm-4 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-2 ${styles.date}`}>
          <h2 className={`fw-bold pb-3`}>Vaccination Date Correction</h2>
          <p className={styles.date_p}>
            Vaccination Date Correction
            If the date printed on your vaccination certificate differs from the actual date of vaccine administration, you may raise a request for correction of the same by submitting a valid proof of correct vaccination date.</p>
          <button className={styles.date_btn}>Update Date</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-1'>
          <img src='Date_Correction.svg' className='img-fluid'></img>
        </div>
      </div>

      {/*precaution */}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5 `}>
        <div className={`px-sm-4 px-md-5 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-1 ${styles.precaution}`}>
          <h2 className={`fw-bold pb-3`}>Precaution Dose</h2>
          <ul className={`px-5 px-sm-3 px-md-0 ${styles.precaution_p}`}>
            <li>All fully vaccinated adult citizens (18+ and have taken 2 doses) are eligible for precaution dose from 10/04/2022. Eligible citizens can avail precaution dose at any Government or Private Vaccination Center. Citizens should carry their Final Certificate of vaccination (with details of both earlier doses). Citizens should use the same mobile number and ID card used for earlier doses.
            </li>
            <li>HCWs, FLWs and Citizens aged 60 year or more, shall continue to receive precaution dose vaccination at any CVC, including free of charge vaccination at Government Vaccination Center.
            </li>
            <li>
              For international travel, precaution dose can be administered to such beneficiary less than 9 months to at a minimum interval of 3 months (90 days) from the date of administration of the second dose as recorded on Co-WlN as per requirement of the destination country. All Vaccination Center in the State where precaution dose is being administered are eligible to administer precaution dose.
            </li>
          </ul>
          <button className={styles.precaution_btn}>Book Your Slot</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-2'>
          <img src='Precaution_dose.svg' className='img-fluid'></img>
        </div>
      </div>

      {/* status */}
      <div className={`d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-5 ${styles.status_div}`}>
        <div className={`px-4  ps-sm-4 d-flex flex-column align-items-center align-items-md-start justify-content-md-center  align-items-start order-2 order-md-2 ${styles.status}`}>
          <h2 className={`fw-bold pb-3`}>Share Your Vaccination Status</h2>
          <p className={styles.status_p}>
            Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19.</p>
          <button className={styles.status_btn}>Share Your Status</button>
        </div>
        <div className='m-5 pe-md-5 order-1 order-md-1'>
          <img src='share_illustration.svg' className='img-fluid'></img>
        </div>
      </div>


      <div className={`d-flex flex-column align-items-center px-3 pt-3 ${styles.healthId}`}>
        <h2 className={`fw-bold pb-3 text-center`}>ABHA (Health ID) and its Benefits</h2>
        <p className={styles.healthId_p}>
          ABHA (earlier known as Health ID) is an acronym for Ayushman Bharat Health Account. Using ABHA (Health ID) is the first step towards creating safer and efficient digital health records for you and your family. It enables your interaction with participating healthcare providers, and allows you to receive your digital lab reports, prescriptions and diagnosis seamlessly from verified healthcare professionals and health service providers.</p>
        <div className='d-flex flex-column flex-md-row gap-3 pt-5 pb-4 px-md-5'>
          <a className={styles.healthId_img}>
            <img src='abha-preview.jpg' className='img-fluid'></img>
          </a>
           <a className={styles.healthId_img}>
            <img src='abha-previewimg.jpg' className='img-fluid'></img>
           </a>
        </div>
        <button className={styles.healthId_btn}>Click Here to Know More</button>

      </div>


    </section>

  )
}

export default VaccinationDetails
