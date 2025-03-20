import { useState, useEffect, FC } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, type = "success", onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return visible ? (
    <div
      className={`${styles.customToast} ${
        type === "success" ? styles.bgSuccess : styles.bgError
      }`}
    >
      {message}
    </div>
  ) : null;
};

export default Toast;
