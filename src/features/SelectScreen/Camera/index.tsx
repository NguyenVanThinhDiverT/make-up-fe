import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "../selectScreen.module.scss";

const Camera = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [openWebcam, setOpenWebcam] = useState(false);
  const [photoCaptured, setPhotoCaptured] = useState(false);

  const handleDoneClick = async () => {
    if (webcamRef.current) {
      // Truy cập webcamRef và chụp ảnh
      const photo = await capturePhoto(webcamRef.current);
      console.log("Captured photo:", photo);
      setPhotoCaptured(true);
      // Thực hiện các xử lý cần thiết trước khi chuyển hướng
      // Gọi API xử lý base64 của photo

      // Sau khi xử lý xong, chuyển hướng sang ResultScreen
      navigate("/result");
    }
  };

  // Hàm chụp ảnh từ Webcam
  const capturePhoto = (webcam: any) => {
    // Sử dụng canvas để chụp ảnh từ video stream của webcam
    const canvas = document.createElement("canvas");
    canvas.width = webcam.props.width;
    canvas.height = webcam.props.height;
    const ctx: any = canvas.getContext("2d");

    // Vẽ video frame lên canvas
    ctx.drawImage(webcam.video, 0, 0, webcam.props.width, webcam.props.height);

    // Trả về ảnh dưới dạng URL
    return canvas.toDataURL("image/jpeg");
  };

  return (
    <div className={styles.camera}>
      <div className={styles.webcamWrapper}>
        <div className={!openWebcam ? styles.webcam : styles.webcamRound}>
          {openWebcam && <Webcam ref={webcamRef} width={500} height={600} />}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <button className={styles.owcBtn} onClick={() => setOpenWebcam(true)}>
            Take your photo
          </button>
        </div>
      </div>
      <div className="">
        <button
          className={`${styles.done} ${photoCaptured ? styles.captured : ""}`}
          onClick={handleDoneClick}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Camera;
