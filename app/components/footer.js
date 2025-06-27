import React from "react";
import styles from "@/app/styles/footer.module.scss";
import Image from "next/image";
import logo from "@/public/logoWhite.png";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainDiv}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" fill />
          </div>
          <p>NaijaSolve&copy; 2025. All rights reserved.</p>
          <p>Built for Nigerians. Powered by everyday solutions.</p>
        </div>
        <div className={styles.mainDiv}>
          <p>Connect With Us</p>
          <div className={styles.socials}>
            <Link
              href="https://www.linkedin.com/company/naijasolve/"
              target="_blank"
              className={styles.socialBorder}
            >
              <RiLinkedinLine size={18} />
            </Link>
            <Link
              href=" https://www.instagram.com/naijasolve"
              target="_blank"
              style={{ verticalAlign: "middle" }}
            >
              <IoLogoInstagram size={30} />
            </Link>
            <Link
              href="https://x.com/NaijaSolve"
              target="_blank"
              className={styles.socialBorder}
            >
              <FaXTwitter size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/share/1KhazTsSYp/"
              target="_blank"
              className={styles.socialBorder}
            >
              <FaFacebookF size={18} />
            </Link>
          </div>
          <p>Have a question?</p>
          <p>
            DM us or send an email to:
            <Link className={styles.link} href="mailto:hello@naijasolve.org">
              hello@naijasolve.org
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
