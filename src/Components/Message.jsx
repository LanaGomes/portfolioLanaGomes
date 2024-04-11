import styles from "./Message.module.css";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  return (
    <>
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    </>
  );
}
export default Message;
