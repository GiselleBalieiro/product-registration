import React from "react";

const Input = ({label, type= "text", value, onChange, placeholder, className }) => {
    return (
        <div className="flex flex-col">
            <label className="text-white font-semibold mb-2">{label}</label>
            <input required
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`bg-[#F5EBDC] text-[#3E2723] placeholder-[#6D4C41] border border-[#6D4C41] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7CCC8] ${className}`}
            />
        </div>
    )
}

export default Input;