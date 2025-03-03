import React from "react";

const Button = ({ className = "px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-700", children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}


export default Button;
