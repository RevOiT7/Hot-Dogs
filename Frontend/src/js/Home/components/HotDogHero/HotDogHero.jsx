import React from "react";
import styles from "./HotDogHero.scss";
import Hero_Dog from "../../../../assets/Hero_Dog_0.png";

export const HotDogHero = props => {
  return (
    <section className={styles.hero}>
      <h1>Hot Dogs</h1>
      <div className={styles.hero_image}>
        <img src={Hero_Dog} alt="hot-dog"/>
      </div>
    </section>
  )

}