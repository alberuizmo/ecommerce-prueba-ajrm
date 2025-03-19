import { createContext } from "react";

export interface ToastContextType {
  showToast: (message: string, type?: "success" | "error") => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

