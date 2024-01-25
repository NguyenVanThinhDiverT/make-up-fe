import styles from "./resultScreen.module.scss";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import ListRef from "./ListRef";
const ResultScreen = () => {
  return (
    <div className={styles.select}>
      <Avatar />
      <ListRef />
    </div>
  );
};

export default ResultScreen;
