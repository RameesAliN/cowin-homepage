"use client"
import React, { useState } from 'react'
import styles from '../styles/raiseAnIssue.module.css'

function RaiseAnIssue() {
  const [state,updateState] = useState(1);
  function updateHandlerPlus(){
    state<6 ? updateState(state+1) : ''
  }
  function updateHandlerMinus(){
    state<=1 ? '' : updateState(state-1) ;
  }
  
  const details=[
    {id:1,title:'Vaccination Date Correction',text:`If your vaccination certificate is showing an incorrect date, you can raise an issue using “Vaccination Date Correction”.`},
    {id:2,title:'Certificate Corrections',text:`If your vaccination certificate is showing incorrect name, gender, birth year or ID details, you can raise an issue using “Certificate Correction”. Using this you can correct any two fields at a time on the vaccination certificate.`},
    {id:3,title:'Merge Certificates',text:'In case you have multiple certificates of Dose 1 generated from different accounts, you can merge them into the final vaccination certificate.'},
    {id:4,title:'Add Passport',text:`If there are any unknown members are associated with your account, you can remove them from your account by reporting unknown members.`},
    {id:5,title:'Report Unknown Member',text:`If there are any unknown members are associated with your account, you can remove them from your account by reporting unknown members.`},
    {id:6,title:'Transfer Member To New Number',text:`You can transfer members associated with your existing account to the new mobile number.`},
  ]
  return (
    <div className={`mt-5 py-5 d-flex flex-column align-items-center ${styles.issue}`}>
      <h3>Raise An Issue</h3>
      <div className={`w-100 pt-3 d-flex justify-content-sm-around align-items-center ${styles.issue_buttons}`}>
        <p className={`text-center small`}>Raise an issue or get solutions to your Co-WIN account and vaccination certificate related issues instantly.</p>
        <div className={`d-flex d-none d-sm-flex px-5 gap-3 ${styles.button_wrapper}`}>
          <button className={styles.issue_button} onClick={updateHandlerMinus}>&#8249;</button>
          <button className={styles.issue_button} onClick={updateHandlerPlus}>&#8250;</button>
        </div>
      </div>
      {details.map((d)=>{
        if(d.id==state){
          return (<div key={d.id} className={`d-flex flex-column align-items-center px-sm-2 px-md-4 ${styles.issue_details}`}>
        <h4>{d.title}</h4>
        <p className='text-center pt-3 small'>{d.text}</p>
      </div>)
        }
      })}
      <div className={`d-flex d-sm-none px-5 gap-3 align-self-end  ${styles.button_wrapper}`}>
          <button className={styles.issue_button} onClick={updateHandlerMinus}>&#8249;</button>
          <button className={styles.issue_button} onClick={updateHandlerPlus}>&#8250;</button>
        </div>
    </div>
  )
}

export default RaiseAnIssue
