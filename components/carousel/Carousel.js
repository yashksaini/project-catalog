import React from "react";
import styles from "./carousel.module.css";
const Carousel = (props) => {
  const { images } = props;
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return (
          <div className={styles.imgBox} key={index}>
            <div className={styles.transparentBox}></div>
            <img src={image.src} alt="Background" />
          </div>
        );
      })}
      <div className={styles.imgBox}>
        <div className={styles.transparentBox}></div>
        <img src={images[0]?.src} alt="Background" />
      </div>
    </div>
  );
};

export default Carousel;
