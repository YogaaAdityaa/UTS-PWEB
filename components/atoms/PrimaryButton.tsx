import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded transition ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default PrimaryButton;