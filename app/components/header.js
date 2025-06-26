import React from "react";
import styles from "@/app/styles/header.module.scss";
import Image from "next/image";
import logo from "@/public/logo.png";

function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" width={225} height={50} />
    </div>
  );
}

export default Header;
