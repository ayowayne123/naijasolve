import React from "react";
import downloadBg from "@/public/downloadBg.png";
import styles from "@/app/styles/download.module.scss";

function Download() {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${downloadBg.src})` }}
    >
      <h4 data-aos="zoom-in-up">Download our Vision Document</h4>
      <p data-aos="zoom-in-up">
        We believe in bold dreams—and even bolder action. The NaijaSolve Vision
        Document lays out our mission, values, and the roadmap we&apos;re
        following to transform communities across Nigeria. It&apos;s more than a
        PDF—it&apos;s our heartbeat.
      </p>
      <button data-aos="flip-up" data-aos-delay="500" className={styles.button}>
        download
      </button>
    </section>
  );
}

export default Download;
