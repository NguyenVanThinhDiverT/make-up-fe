import { useNavigate } from "react-router-dom";
import styles from "./resultScreen.module.scss";

const Avatar = () => {
  const navigate = useNavigate();
  const handleReselectClick = () => {
    // Thực hiện các xử lý cần thiết trước khi chuyển hướng - None
    // Sau khi xử lý xong, chuyển hướng sang trang Select ban đầu
    navigate("/");
  };
  return (
    <div className={styles.chooseStyle}>
      <div className={styles.camera}>
        <div className={styles.webcamWrapper}>
          <div className={styles.image}>
            <img
              src={require("../../assets/img1.png")}
              alt="avatar"
              height={"394px"}
              width={"410px"}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 45,
            }}
          >
            <button
              className={styles.owcBtn}
              onClick={() => handleReselectClick()}
            >
              Reselect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
