import React from "react";
import styles from "@/app/styles/vision.module.scss";
import { FiCompass } from "react-icons/fi";
import { PiTarget } from "react-icons/pi";

function Vision() {
  return (
    <section className={styles.container}>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-bottom"
        className={styles.card}
      >
        <div className={styles.icon1}>
          <PiTarget size={32} />
        </div>
        <h4 className={styles.title}>Our Vision</h4>
        <p>
          A Nigeria where everyday people lead the change they want to see — one
          solution, one street, one community at a time.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-bottom"
        className={styles.card}
      >
        <div className={styles.icon2}>
          <FiCompass size={32} />
        </div>
        <h4 className={styles.title}>Our Mission</h4>
        <p>
          To identify, support, and celebrate everyday Nigerians who are
          creating solutions to real local challenges — through funding,
          mentorship, visibility, and impact tracking.
        </p>
      </div>
    </section>
  );
}

export default Vision;
