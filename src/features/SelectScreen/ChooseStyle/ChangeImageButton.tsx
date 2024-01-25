import React, { FC, MouseEvent } from "react";
import styles from "../selectScreen.module.scss";

type ChangeImageButtonProps = {
  icon: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ChangeImageButton: FC<ChangeImageButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.cib} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ChangeImageButton;
