import React, { useEffect } from "react";

const ErrorToast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={styles.toast}>
      {message} <span onClick={onClose}>❌</span>
    </div>
  );
};

const styles = {
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#ff4d4f",
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 9999,
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default ErrorToast;
