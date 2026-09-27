import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const variantStyles = {
  primary: "bg-neutral-100 text-neutral-950 hover:bg-white",
  outline: "border border-neutral-600 text-neutral-100 hover:bg-neutral-800",
  ghost: "text-neutral-100 hover:text-white hover:bg-neutral-900",
};

const sizeStyles = {
  default: "px-8 py-4",
  sm: "px-4 py-2",
  lg: "px-12 py-5",
};

const baseStyles = "inline-flex items-center justify-center text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  isExternal?: boolean;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, isExternal, ...props }, ref) => {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
