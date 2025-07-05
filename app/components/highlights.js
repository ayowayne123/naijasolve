import React from "react";
import styles from "@/app/styles/highlights.module.scss";
import Image from "next/image";
import classroom2 from "@/public/classroom2.png";
import blessingTemitope from "@/public/blessingTemitope.png";
import classroom1 from "@/public/classroom1.png";
import brokenChairs from "@/public/brokenChairs.png";

function Highlights() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.header}>
        <h4>Project Spotlights</h4>
        <p>
          Real stories. Real change. Stay tuned as we spotlight the amazing work
          of our first set of Community Solution Managers.
        </p>
      </div>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.spotlight}>
          <Image src={blessingTemitope} alt="an empty classroom" fill />
        </div>
        <div className={styles.imageGroup}>
          <div className={styles.twoImages}>
            <div data-aos="fade-up" className={styles.half}>
              <Image src={classroom1} alt="an empty classroom" fill />
            </div>
            <div data-aos="fade-up" className={styles.half}>
              <Image src={classroom2} alt="an empty classroom" fill />
            </div>
          </div>
          <div className={styles.singleImage} data-aos="fade-up">
            <Image src={brokenChairs} alt="an empty classroom" fill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
