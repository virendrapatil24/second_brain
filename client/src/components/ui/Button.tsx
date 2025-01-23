import { ReactNode } from "react";

export interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: () => void;
}

const variantStyles = {
    "primary": "bg-turquoise-100 text-turquoise-700 hover:bg-turquoise-200",
    "secondary": "bg-turquoise-700 text-white hover:bg-turquoise-800"
}

const sizeStyles = {
    "sm": "py-1 px-2 rounded",
    "md": "py-2 px-2 rounded-md",
    "lg": "py-3 px-12 rounded-lg"
}

const defaultStyles = "flex justify-center items-center"

const Button = ({ variant = "primary", size = "sm", text, startIcon, endIcon }: ButtonProps) => {
    return (
        <button className={`${defaultStyles}  ${variantStyles[variant]} ${sizeStyles[size]}`}>
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