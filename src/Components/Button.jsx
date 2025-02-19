import React from "react";


const Button = ({ label, onClick, type="button", className }) => {
  return (
    <button 
        onClick={onClick} 
        type={type} 
        className={`px-4 py-2 rounded-lg text-white ${className}`}>
        {label}
    </button>
  )
}

export default Button;