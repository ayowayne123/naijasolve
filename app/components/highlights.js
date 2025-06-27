import React from "react";
import styles from "@/app/styles/highlights.module.scss";
import Image from "next/image";
import classroom from "@/public/classroom.png";
import highway from "@/public/highway.png";
import publicTap from "@/public/publicTap.png";

function Highlights() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.spotlight}>
          <span className={styles.tag}>coming soon</span>
          <h4>Project Spotlights</h4>
          <p>
            Real stories. Real change. Stay tuned as we spotlight the amazing
            work of our first set of Community Solution Managers.
          </p>
        </div>
        <div className={styles.imageGroup}>
          <div className={styles.twoImages}>
            <div data-aos="fade-up" className={styles.half}>
              <Image src={classroom} alt="an empty classroom" fill />
            </div>
            <div data-aos="fade-up" className={styles.half}>
              <Image src={highway} alt="an empty classroom" fill />
            </div>
          </div>
          <div className={styles.singleImage} data-aos="fade-up">
            <Image src={publicTap} alt="an empty classroom" fill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
