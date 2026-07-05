import '../app/globals.css'
import HeroSection from '@/component/HeroSection';
import styles from '../styles/hero.module.css'
import Appoiment from '@/component/Appoiment';
import VaccinationCenter from '@/component/VaccinationCenter';
import VaccinationDetails from '@/component/VaccinationDetails';
import RaiseAnIssue from '@/component/RaiseAnIssue';
import WhatIsNew from '@/component/WhatIsNew';
import LargestVacinationDrive from '@/component/LargestVacinationDrive';
import Partners from '@/component/Partners';


export default function Home() {
  return (<>
  {/* <HeroSection/> */}
  <Appoiment/>
  <VaccinationCenter/>
  <VaccinationDetails/>
  <RaiseAnIssue/>
  <WhatIsNew/>
  <LargestVacinationDrive/>
  <Partners/>
  </>);
}