"use client"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/header.module.css'
import BootstrapClient from '@/utils/bootsrtapUtils';

function Header() {
  const languages = [
    { code: "en", label: "ENGLISH" },
    { code: "hi", label: "हिन्दी" },
    { code: "ta", label: "தமிழ்" },
  ];
  const [selected, setSelected] = useState(languages[0]);
  const menuItems = [
    { item: 'ABH(Health ID)' },
    { item: 'Dashboard' },
    { item: 'Verify Certificate' },
    { item: 'FAQ' },
    { item: 'Partners' }
  ]
  return <>
    <BootstrapClient/>
    <header className='d-flex flex-column sticky-top' >

      {/* first nav */}
      <div className={`${styles.topbar} navbar d-flex flex-wrap align-items-center justify-content-between px-lg-2`}>

        <div className=" d-flex align-items-center gap-2 ps-3 ps-lg-4">
          <img src="emblem-gov.svg" alt="State Emblem of India" className={styles.ashoka} />
          <div className={styles.gov_text}>
            <span>Ministry of Health and</span>
            <span>Family Welfare</span>
          </div>
        </div>

        <div className="d-flex justify-content-end dropdown pe-4">
          <button className={`dropdown-toggle ${styles.langToggle}`} type="button" data-bs-toggle="dropdown">
            {selected.label}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {languages.map((lang) => (
              <li key={lang.code}>
                <a className="dropdown-item" href="#" onClick={() => setSelected(lang)}>
                  {lang.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* second nav */}
      <nav className={`${styles.main_nav} navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between px-lg-3`}>

        <div className={` ps-3  navbar-brand `}>
          <img src='new-logo.svg'></img>
        </div>

        <div className="d-flex align-items-center gap-2">

          {/* desktop ul + Register button */}
          <div className="navbar-nav pe-1 pe-lg-4  gap-lg-4 d-flex flex-row" >
            <ul className={`nav d-flex d-none d-lg-flex ${styles.nav_list}`}>
              {menuItems.map((i) => {
                return (<li className="nav-item" key={i.item}>
                  <a className={`nav-link ${styles.link}`} aria-current="page" href="#">{i.item}</a>
                </li>)
              })}
            </ul>
            <button className={`${styles.nav_button} px-4`}>
              Register / Sign In
            </button>
          </div>

          {/* three dot toggle */}
          <div className={`dropdown d-lg-none ${styles.nav_toggle_wrap}`}>
            <button
              className={`nav-item ${styles.nav_toggle_button}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {menuItems.map((i) => {
                return (<li key={i.item}>
                  <a className={`dropdown-item ${styles.humbergur_icon}`} aria-current="page" href="#">{i.item}</a>
                </li>)
              })}
            </ul>
          </div>
        </div>


      </nav>
    </header>

  </>
}

export default Header
