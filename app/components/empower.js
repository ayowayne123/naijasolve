import React from "react";
import styles from "@/app/styles/empower.module.scss";
import Image from "next/image";
import moneyHand from "@/public/moneyHand.png";
import people from "@/public/people.png";

function Empower() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.grid}>
          <h4 data-aos="zoom-in">
            NaijaSolve empowers people—not just fixes problems.
          </h4>
          <p data-aos="fade-left" data-aos-delay="400">
            NaijaSolve empowers everyday Nigerians to lead change in their
            communities with funding, mentorship, and support. We don&apos;t
            wait for solutions — we build them, one project at a time.
          </p>
        </div>
      </section>
      <div className={styles.cardGrid}>
        <div className={styles.card1} data-aos="fade-left" data-aos-delay="300">
          <h4 className={styles.number}>01</h4>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Image src={moneyHand} alt="moneyHand" fill />
            </div>
          </div>

          <p>We are producing the next generation of problem solvers</p>
        </div>
        <div className={styles.card2} data-aos="fade-left" data-aos-delay="600">
          <h4 className={styles.number}>02</h4>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Image src={people} alt="people" fill />
            </div>
          </div>

          <p>We Mobilize funds for them</p>
        </div>
        <div className={styles.card3} data-aos="fade-left" data-aos-delay="900">
          <h4 className={styles.number}>03</h4>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Image src={moneyHand} alt="moneyHand" fill />
            </div>
          </div>

          <p>We are producing the next generation of problem solvers</p>
        </div>
      </div>
    </>
  );
}

export default Empower;
