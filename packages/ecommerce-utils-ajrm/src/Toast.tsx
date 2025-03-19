import { useState, useEffect, FC } from "react";

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
      className={`fixed top-20 right-5 px-4 py-2 rounded-lg shadow-lg text-white text-md transition-opacity duration-400 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } z-50`}
    >
      {message}
    </div>
  ) : null;
};

export default Toast;
