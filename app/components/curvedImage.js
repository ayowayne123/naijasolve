"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "@/public/heroImage1.png";
import image2 from "@/public/heroImage2.png";
import image3 from "@/public/heroImage3.png";
import image4 from "@/public/heroImage4.png";
import styles from "@/app/styles/curvedImage.module.scss";

function CurvedImage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let direction = 1; // 1 = forward, -1 = backward
    const scrollSpeed = 1;
    let animationFrameId;

    const swayScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;

      scrollAmount += scrollSpeed * direction;

      if (scrollAmount >= maxScroll) {
        direction = -1;
        scrollAmount = maxScroll;
      } else if (scrollAmount <= 0) {
        direction = 1;
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(swayScroll);
    };

    animationFrameId = requestAnimationFrame(swayScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.topArc}></div>
      <div className={styles.bottomArc}></div>
      <div className={styles.innerContainer} ref={scrollRef}>
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
