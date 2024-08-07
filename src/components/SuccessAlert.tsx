import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface SuccessAlertProps {
  message: string;
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message }) => {
  return (
    <div className="fixed bottom-7 left-0 right-5 p-2 rounded-md bg-[#88d388] border border-[#3ca03c] w-full max-w-[15rem] text-green-900  z-50 animate-slideIn">
      <h2 className="flex items-center gap-2">
        <p className="text-sm">{message}</p>
        <span className="text-lg">
          <Icon icon="ic:round-check" />
        </span>
      </h2>
    </div>
  );
};

export default SuccessAlert;
