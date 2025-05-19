"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "text-xs uppercase tracking-[3px] px-[70px] py-[21px] rounded-sm border-[3px] transition-colors",
          variant === "primary" &&
            "bg-[rgba(210,182,177,1)] text-black border-[rgba(210,182,177,1)]",
          variant === "outline" &&
            "bg-transparent border-[rgba(210,182,177,1)] text-[rgba(210,182,177,1)]",
          variant === "white" &&
            "bg-white text-black border-[rgba(210,182,177,1)]",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
