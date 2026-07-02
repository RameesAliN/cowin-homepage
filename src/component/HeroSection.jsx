import React from 'react'
import styles from '../styles/hero.module.css'

function HeroSection() {
  return (<>
    <section>
      <div className={`row d-flex flex-row pt-3 ${styles.hero}`}>


        <div className={`col-10 col-md-6 ps-5 order-2 order-md-1`}>

          <div className="pt-2 ms-md-5 mt-5 d-flex flex-column align-items-md-end gap-3">
            <h2 className={`d-flex justify-content-end fw-bold ${styles.sub_heading}`}>
              Historic & Unparalleled Achievement !
              India’s Glorious Journey of
            </h2>
            <div className="d-flex align-items-center  gap-2 border rounded border-danger border-3 px-3 py-2">
              <img src="verified.svg" width={40} height={40} alt="verified" />
              <h2 className={`${styles.hero_banner} ps-4 text-danger fw-bold`}>200 CRORE VACCINATIONS</h2>
            </div>
            <div className={styles.hero_pm}>
              <p className="fw-bold text-dark">
                "India is set to defeat Covid-19. Every Indian is making it possible."
              </p>
              <p className="fw-semibold text-dark">
                - PM Narendra Modi
              </p>
            </div>
          </div>
        </div>

        <div className="col-11 col-md-6 col-lg-5 order-1 order-md-2">
          <div className={`${styles.hero_flag} pe-md-5 pe-lg-0`}>
            <img src="independance.svg" className="img-fluid"></img>
          </div>
        </div>

      </div>

      {/* hero status */}
      <div className={`d-flex justify-content-around align-items-center position-relative bg-light h-100 w-100 px-5 ${styles.hero_status}`}>
        {/* for vertical background color */}
        <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles.hero_status_left}`} />
        <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles.hero_status_right} `} />

        <span className="text-uppercase text-light position-relative">
          Total Vaccination Doses </span>
        <button className={`text-uppercase rounded-pill px-5 py-2 ${styles.status_button}`}> View More</button>
        <span className="text-uppercase text-dark position-relative" >Vaccinations Done Today</span>
      </div>
    </section>
  </>);
}

export default HeroSection
