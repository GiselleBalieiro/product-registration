import React from "react";

const Input = ({label, type= "text", value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="font-medium">{label}</label>}
                <input required
                    type={type} 
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>
        </div>
    )
}

export default Input;