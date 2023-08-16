import React from 'react';
import styles from "./hero.module.scss";
import video from '../../assets/images/Spectacular Norway - from the air.mp4'
import Search from "../../components/Search/Search";

export default function Hero() {
  return (
    <div className={styles.herobackGround}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Search/>
    </div>
  );
}
