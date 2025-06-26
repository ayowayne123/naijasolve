"use client";

import React from "react";
import styles from "@/app/styles/hero.module.scss";
import Link from "next/link";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className={styles.container}>
      <h1 data-aos="fade-up" className={styles.title}>
        <span>&quot;It is well&quot; </span>
        <span>won&apos;t fix Nigeria</span>
      </h1>

      <p data-aos="fade-up" data-aos-delay="100" className={styles.text}>
        NaijaSolve is transforming community pain points into funded solutions
        by empowering everyday Nigerians to solve problems, whether it&apos;s
        water, school fees, hospital bills, or jobs in your local community. We
        aim to be the Gofundme for Community Development for Nigeria
      </p>

      <div className={styles.buttonDiv}>
        <Link
          data-aos="flip-up"
          data-aos-delay="300"
          className={styles.buttonPry}
          href="/"
        >
          Count Me In
        </Link>
        <Link
          data-aos="flip-down"
          data-aos-delay="500"
          className={styles.buttonSec}
          href="https://bit.ly/NaijaSolveApply"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a CSM
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={styles.numbersDiv}
      >
        <div className={styles.numbersCol}>
          <h4>
            <CountUp end={25} duration={3} />+
          </h4>
          <p>Communities Transformed</p>
        </div>
        <div className={styles.numbersCol}>
          <h4>
            <CountUp end={10} duration={3} />+
          </h4>
          <p>Community Support Managers</p>
        </div>
        <div className={styles.numbersCol}>
          <h4>
            $<CountUp end={100000} duration={2} separator="," />
          </h4>
          <p>Capital Mobilized</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
