import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Kirar</h1>
        <p className={styles.description}>
          I'm a MERN Stack developer with expertise in back-end development
          experienced in leading cross-functional teams
        </p>
        <a
          href="mailto:abhishekkirar199@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
