import '../app/globals.css'
import HeroSection from '@/component/HeroSection';
import styles from '../styles/hero.module.css'
import Appoiment from '@/component/Appoiment';
import VaccinationCenter from '@/component/VaccinationCenter';
import VaccinationDetails from '@/component/VaccinationDetails';

export default function Home() {
  return (<>
  {/* <HeroSection/> */}
  <Appoiment/>
  <VaccinationCenter/>
  <VaccinationDetails/>
  </>);
}