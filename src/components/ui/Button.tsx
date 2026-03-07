import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b4ff39]";
    
    const variants = {
      primary: "bg-[#b4ff39] text-black hover:bg-[#a3eb32]",
      secondary: "bg-black text-white hover:bg-gray-900 border border-transparent",
      outline: "border border-gray-200 text-black hover:bg-gray-50",
      ghost: "text-gray-600 hover:text-black hover:bg-gray-100"
    };

    return (
      <motion.button
        ref={ref}
        className={`${baseClass} px-6 py-2.5 ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
