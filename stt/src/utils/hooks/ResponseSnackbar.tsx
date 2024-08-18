import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface ResponseSnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const ResponseSnackbar: React.FC<ResponseSnackbarProps> = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={classNames(
        "fixed top-4 -left-1 transform transition-transform duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "bg-red-600 text-white p-4 rounded shadow-lg z-50"
      )}
    >
      {message}
    </div>
  );
};

export default ResponseSnackbar;
