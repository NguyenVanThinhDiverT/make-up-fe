import React, { useState } from "react";
import ChangeImageButton from "./ChangeImageButton";
import styles from "../selectScreen.module.scss";
import ChooseStyleButton from "./ChooseStyleButton";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChooseStyle = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [currentStyle, setCurrentStyle] = useState("Study"); // "Study" hoặc "Play"
  const totalImages = 10;

  const handleNextImage = () => {
    const imageRange =
      currentStyle === "Study" ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10];
    const currentIndex = imageRange.indexOf(currentImage);

    const nextIndex =
      currentIndex === imageRange.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(imageRange[nextIndex]);
  };

  const handlePreviousImage = () => {
    const imageRange =
      currentStyle === "Study" ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10];
    const currentIndex = imageRange.indexOf(currentImage);

    const previousIndex =
      currentIndex === 0 ? imageRange.length - 1 : currentIndex - 1;
    setCurrentImage(imageRange[previousIndex]);
  };
  const handleChooseStyle = (style: string) => {
    setCurrentStyle(style);

    // Nếu là "Study", đặt ảnh từ 1 đến 5
    // Nếu là "Play", đặt ảnh từ 6 đến 10
    const imageRange = style === "Study" ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10];
    setCurrentImage(imageRange[0]);
  };

  return (
    <div className={styles.chooseStyle}>
      <div className={styles.chooseStyleButtonWrapper}>
        <ChooseStyleButton
          title="Study"
          isActive={currentStyle === "Study"}
          onClick={() => handleChooseStyle("Study")}
        />
        <ChooseStyleButton
          title="Play"
          isActive={currentStyle === "Play"}
          onClick={() => handleChooseStyle("Play")}
        />
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.cibWrapper}>
          <ChangeImageButton
            icon={<FontAwesomeIcon icon={faCaretLeft} />}
            onClick={handlePreviousImage}
          />
        </div>
        <div className={styles.image}>
          <img
            src={require(`../../../assets/img${currentImage}.png`)}
            alt={`Image ${currentImage}`}
          />
        </div>
        <div className={styles.cibWrapper}>
          <ChangeImageButton
            icon={<FontAwesomeIcon icon={faCaretRight} />}
            onClick={handleNextImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseStyle;
