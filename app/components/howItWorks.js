"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/howItWorks.module.scss";

function HowItWorks() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <h4 data-aos="fade-up">How It Works</h4>
        <div
          className={`${styles.stepsContainer} ${inView ? styles.animate : ""}`}
          ref={containerRef}
        >
          <div className={styles.step}>
            <span className={styles.dot}></span>
            <p data-aos="fade-left" data-aos-delay="300">
              You propose your solution
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.dot}></span>
            <p data-aos="fade-left" data-aos-delay="600">
              Commit to 10% of the total cost of the solution
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.dot}></span>
            <p data-aos="fade-left" data-aos-delay="900">
              Get your local community to commit 10%
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.dot}></span>
            <p data-aos="fade-left" data-aos-delay="1200">
              NaijaSolve will mobilise the remaining 80% of funding to complete
              it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
