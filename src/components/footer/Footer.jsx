import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 Lorinem. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Facebook"
          width={15}
          className={styles.icon}
          height={15}
        />
        <Image
          src="/2.png"
          alt="Instagram"
          width={15}
          className={styles.icon}
          height={15}
        />
        <Image
          src="/3.png"
          alt="Twitter"
          width={15}
          className={styles.icon}
          height={15}
        />
        <Image
          src="/4.png"
          alt="Youtube"
          width={15}
          className={styles.icon}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
