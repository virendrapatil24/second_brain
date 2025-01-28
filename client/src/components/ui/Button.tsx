import { ReactNode } from "react";

export interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: () => void;
    className?: string;
}

const variantStyles = {
    "primary": "bg-turquoise-100 text-turquoise-900 hover:bg-turquoise-200",
    "secondary": "bg-turquoise-700 text-white hover:bg-turquoise-800"
}

const sizeStyles = {
    "sm": "py-0 px-2 rounded",
    "md": "py-2 px-4 rounded-md",
    "lg": "py-3 px-12 rounded-lg"
}

const defaultStyles = "flex justify-center items-center"

const Button = ({ variant = "primary", size = "md", text, startIcon, endIcon, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${defaultStyles}  ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
            <div className="pr-2">
                {startIcon}
            </div>
            {text}
            <div className="pl-2">
                {endIcon}
            </div>
        </button>
    )
}

export default Button