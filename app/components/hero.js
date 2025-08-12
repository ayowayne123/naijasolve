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
          data-aos="fade-up"
          className={styles.buttonPry}
          href="https://docs.google.com/forms/d/e/1FAIpQLScBHkfMcReSvzyg9kbhXiqlqsNOL3kZUpQEb4sfj1jn3Rp0XQ/viewform?usp=header"
      //     {`mailto:hello@naijasolve.org?subject=Interest%20in%20Supporting%20NaijaSolve&body=${encodeURIComponent(
      //       `Hello NaijaSolve Team,
      
      // I recently came across your initiative and was truly inspired by the work you're doing to empower communities through grassroots solutions.
      
      // I'd love to support your mission as a [Funder / Resource Person / Media Partner / Other - please specify], and I'm eager to learn how I can contribute meaningfully.
      
      // Looking forward to hearing from you.
      
      // Thank you for all you do!
      
      // Best regards,
      // [Your Name]
      // [Your Contact Info]`
      //     )}`}
        >
          Count Me In
        </Link>
        <Link
          data-aos="fade-up"
          className={styles.buttonSec}
          href="https://bit.ly/NaijaSolveApply"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a CSM
        </Link>
      </div>

      <div data-aos="fade-up" className={styles.numbersDiv}>
        <div className={styles.numbersCol}>
          <h4>
            <CountUp end={100} duration={3} />+
          </h4>
          <p>Communities Transformed</p>
        </div>
        <div className={styles.numbersCol}>
          <h4>
            <CountUp end={100} duration={3} />+
          </h4>
          <p>Community Support Managers</p>
        </div>
        <div className={styles.numbersCol}>
          <h4>
            $<CountUp end={20000} duration={2} separator="," />
          </h4>
          <p>Capital Mobilized</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
