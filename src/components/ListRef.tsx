// ListRefComponent.tsx

import React from "react";
import styles from "../features/ResultScreen/resultScreen.module.scss";

interface ListRefComponentProps {
  title: string;
  link: string;
  txtLink: string;
  url: string;
}

const ListRefComponent: React.FC<ListRefComponentProps> = ({
  title,
  link,
  txtLink,
  url,
}) => {
  return (
    <div className={styles.listRef}>
      <div className={styles.squareImage}>
        <div className={styles.webcam}>
          <img src={url} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.link}>
          <a href={link}>{txtLink}</a>
        </div>
      </div>
    </div>
  );
};

export default ListRefComponent;
