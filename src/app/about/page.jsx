import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are.</h1>
          <p className={styles.description}>
            At our core, we are digital artisans, weaving narratives into
            immersive digital experiences that captivate and inspire.
            <br />
            <br />
            We are storytellers driven by innovation, crafting award-winning
            journeys that transcend the ordinary.
            <br />
            <br />
            Through a fusion of creativity and technology, we breathe life into
            stories, empowering brands to connect with their audiences on a
            deeper level.
            <br />
            <br />
            Our mastery lies in handcrafting digital experiences that resona. At
            our core, we believe in the power of storytelling to transform the
            digital landscape.
            <br />
            <br />
            Join us on this enchanting voyage where creativity meets technology,
            and let&apos;s craft your story into an unforgettable digital
            masterpiece.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>How we do it.</h1>
          <p className={styles.description}>
            <strong>Creative Fusion:</strong> We blend creativity and technology
            to breathe life into stories, enabling brands to forge deeper
            connections with their audiences.
            <br />
            <br />
            <strong>Engagement and Emotion:</strong> Through our work, we evoke
            emotion and drive engagement, leaving a lasting impression that
            resonates with users.
            <br />
            <br />
            <strong>Transforming Landscapes:</strong> We believe in the
            transformative power of storytelling to reshape the digital
            landscape and elevate brands to new heights.
            <br />
            <br />
            <strong>Collaborative Journey:</strong> Join us on an enchanting
            voyage where creativity converges with technology to craft your
            brand&apos;s story into a digital masterpiece.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
