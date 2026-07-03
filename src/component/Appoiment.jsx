import React from 'react'
import styles from '../styles/appoiment.module.css'

function Appoiment() {
  const cards = [
    {
      number: "Step 1",
      title: "Book an Appointment on Co-WIN or Walk into any Vaccination Center",
      footer: "How to Book Your Appointment on Co-WIN?",
      image: "Step_1 (1).svg"
    }, {
      number: "Step 2",
      title: "Get Your Vaccination Safely at the Time of Your Appointment",
      footer: "Dos And Dont's For Getting Vaccinated",
      image: "Step_2.svg"
    }, {
      number: "Step 3",
      title: "Download Your Vaccination Certificate from Co-WIN and Wait for Dose #2",
      footer: "Download Your Vaccine Certificate",
      image: "Step_3.svg"
    }
  ]
  return (
    <div className={`${styles.vaccination_steps} pt-3 py-md-5`}>
      <h2 className={`d-flex justify-content-center fw-bold ${styles.vaccination_steps_head}`}>
        Get Vaccinated in 3 Easy Steps
      </h2>
      <div className={`d-flex flex-column flex-md-row justify-content-center  pt-5`} >
        {cards.map((c,i) => {
          return <div className={`d-flex  align-items-md-stretch`} key={c.number}>
            <div className={`card ${styles.vaccination_card} mx-5 mx-md-0`}>
              <span className={`position-absolute top-0 start-50 translate-middle border py-1 fw-bold bg-white  px-3 rounded ${styles.card_badge}`}>{c.number}</span>
              <img src={`${c.image}`} className={`card-img-top img-md-fluid p-4 pb-0 ${styles.card_image}`} alt="..." />
              <p className={`small px-lg-4 py-md-3 py-md-5 ${styles.card_title} text-light`}>
                {c.title}
              </p>
              <p className={`small px-lg-5 ${styles.card_footer}`}>
                {c.footer}
              </p>
            </div>
            {i < cards.length - 1 && (
              <div className={`${styles.arrow} px-lg-3 d-none d-md-flex px-3 align-self-center`}>&#8250;</div>       
              )}
          </div>
        })}

      </div>

    </div>
  )
}

export default Appoiment
