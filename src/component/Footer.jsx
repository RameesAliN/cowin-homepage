import React from 'react'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
   <div className='container-fluid'>
     <footer className={`mt-5 ${styles.footer} row ps-5`}>
      <div className={`col-6 col-md-4 col-lg-2 px-2 ${styles.footer_col}`}>
        <h6 className='text-uppercase pb-4'>Vaccination Services</h6>
        <p className='small'>Register Members</p>
        <p className='small'>Search Vaccination Centers</p>
        <p className='small'>Book Vaccination Slots</p>
        <p className='small'>Manage Appointment</p>
        <p className='small'>Download Certificate</p>
      </div>
      <div className={`col-6 col-md-4 col-lg-2 px-1 ${styles.footer_col}`}>
        <h6 className='text-uppercase pb-4'>Platforms</h6>
        <p className='small'>Co-WIN International</p>
        <p className='small'>Vaccinator</p>
        <p className='small'>Department Login</p>
        <p className='small'>Verify Certificates</p>
        <p className='small'>Vaccination Statistics</p>
      </div>
      <div className={`col-6 col-md-4 col-lg-2 px-1 ${styles.footer_col}`}>
        <h6 className='text-uppercase pb-4'>Resources</h6>
        <p className='small'>How To Get Vaccinated</p>
        <p className='small'>Dos and Don'ts</p>
        <p className='small'>Overview</p>
        <p className='small'>API Guidelines</p>
        <p className='small'>Open API's</p>
        <p className='small'>Grievance Guidelines</p>
      </div>
      <div className={`col-4  px-1 d-block d-md-none ${styles.footer_col}`}>
          <h6 className='text-uppercase pb-4'>Support</h6>
          <p className='small'>Frequently Asked Questions</p>
          <p className='small'>Certificate Corrections</p>
        </div>

      <div className='col-md-12 col-lg-6 row'>
        <div className={`col-md-4 col-lg-6 px-1 d-none d-md-block ${styles.footer_col}`}>
          <h6 className='text-uppercase pb-4'>Support</h6>
          <p className='small'>Frequently Asked Questions</p>
          <p className='small'>Certificate Corrections</p>
        </div>
        <div className={`col-md-4 col-lg-6 px-1 ${styles.footer_col}`}>
          <h6 className='text-uppercase pb-4'>Contact Us</h6>
          <p className='small'>Helpline: +91-11-23978046 (Toll Free - 1075 )</p>
          <p className='small'>Technical Helpline: 0120-4783222</p>
        </div>

        <div className={`col-12 row pt-sm-3 ${styles.footer_col_child}`}>
          <div className='col-2'>
            <h6 className='text-uppercase pb-4'>Child</h6>
            <p className='small'>1098</p>
          </div>
          <div className='col-4'>
            <h6 className='text-uppercase pb-4'>Mental Health</h6>
            <p className='small'>08046110007</p>
          </div>
          <div className='col-4'>
            <h6 className='text-uppercase pb-4'>Senior Citizens</h6>
            <p className='small'>14567</p>
          </div>
          <div className='col-2'>
            <h6 className='text-uppercase pb-4'>NCW</h6>
            <p className='small'>7827170170</p>
          </div>

        </div>

      </div>
    </footer>
   </div>
  )
}

export default Footer
