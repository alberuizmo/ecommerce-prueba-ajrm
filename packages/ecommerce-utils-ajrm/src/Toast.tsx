import { useState, useEffect, FC } from "react";
import "./index.css";

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
      className={`custom-toast ${
        type === "success" ? "bg-success" : "bg-error"
      }`}
    >
      {message}
    </div>
  ) : null;
};

export default Toast;
