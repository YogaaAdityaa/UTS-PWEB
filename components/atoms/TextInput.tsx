import React from "react";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  name
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
    className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
  />
);

export default TextInput;