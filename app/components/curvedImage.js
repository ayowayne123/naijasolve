import React from "react";
import Image from "next/image";
import image1 from "@/public/heroImage1.png";
import image2 from "@/public/heroImage2.png";
import image3 from "@/public/heroImage3.png";
import image4 from "@/public/heroImage4.png";
import styles from "@/app/styles/curvedImage.module.scss";

function CurvedImage() {
  return (
    <section className={styles.container}>
      {/* <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.slide}>
            <Image src={image} alt="" />
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.slide}>
            <Image src={image} alt="" />
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.slide}>
            <Image src={image} alt="" />
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.slide}>
            <Image src={image} alt="" />
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.slide}>
            <Image src={image} alt="" />
          </div>
        </div>
      </div> */}
      <div className={styles.topArc}></div>
      <div className={styles.bottomArc}></div>
      <div className={styles.innerContainer}>
        <div className={styles.imageDiv}>
          <Image src={image1} alt="image of house" fill />
        </div>
        <div className={styles.imageDiv}>
          <Image src={image2} alt="image of house" fill />
        </div>
        <div className={styles.imageDiv}>
          <Image src={image3} alt="image of house" fill />
        </div>
        <div className={styles.imageDiv}>
          <Image src={image4} alt="image of house" fill />
        </div>
      </div>
    </section>
  );
}

export default CurvedImage;
