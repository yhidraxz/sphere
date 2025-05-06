import { useEffect, useState } from "react";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
        />
      </div>
    </div>
  );
};
