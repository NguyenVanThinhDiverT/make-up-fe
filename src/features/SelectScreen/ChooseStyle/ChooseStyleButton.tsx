import React, { FC } from "react";
import styles from "../selectScreen.module.scss";

type ChooseStyleButtonProps = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

const ChooseStyleButton: FC<ChooseStyleButtonProps> = ({
  title,
  isActive,
  onClick,
}) => {
  const buttonClassName = isActive
    ? `${styles.csb} ${styles.active}`
    : styles.csb;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {title}
    </button>
  );
};

export default ChooseStyleButton;
