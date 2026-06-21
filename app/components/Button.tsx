"use client";

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type SharedButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButton = SharedButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

type ButtonAsLink = SharedButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "brand-gradient text-white",
  secondary:
    "border border-black/10 bg-white/55 text-black/75 backdrop-blur-md hover:border-accentBlue/40 hover:text-accentBlue dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:text-white",
  ghost:
    "text-darkGray/70 shadow-none hover:bg-black/5 hover:text-accentBlue dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-lg",
  icon: "h-10 w-10 p-0",
};

function Button(props: ButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
  } = props;

  const classes = twMerge(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-4 focus-visible:ring-offset-lightGray active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-offset-[#050505]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const {
      href,
      external,
      children,
      className,
      size,
      variant,
      target,
      rel,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        target={external ? "_blank" : target}
        rel={external ? "noreferrer" : rel}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    children: buttonChildren,
    className: buttonClassName,
    size: buttonSize,
    variant: buttonVariant,
    type: buttonType,
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button type={buttonType ?? "button"} className={classes} {...buttonProps}>
      {buttonChildren}
    </button>
  );
}

export default Button;
