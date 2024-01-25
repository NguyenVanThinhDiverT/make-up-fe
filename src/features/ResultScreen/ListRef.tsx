import React from "react";
import styles from "./resultScreen.module.scss";
import ListRefComponent from "../../components/ListRef";

const ListRef = () => {
  return (
    <div className={styles.containerList}>
      <ListRefComponent
        url={require("../../assets/img4.png")}
        title="Sample 1"
        link="https://www.google.com/"
        txtLink="Study for life"
      />
      <ListRefComponent
        url={require("../../assets/img5.png")}
        title="Sample 2"
        link="https://www.google.com/"
        txtLink="Play game"
      />
      <ListRefComponent
        url={require("../../assets/img6.png")}
        title="Sample 3"
        link="https://www.google.com/"
        txtLink="Chill with afternoon"
      />
    </div>
  );
};

export default ListRef;
