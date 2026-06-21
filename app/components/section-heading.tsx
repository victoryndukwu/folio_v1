import React from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  color?: "default" | "primary" | "secondary" | "muted" | "white" | "black";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  uppercase?: boolean;
  truncate?: boolean;
  italic?: boolean;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-medium",
  h6: "text-base md:text-lg font-medium",
};

const colorStyles: Record<NonNullable<HeadingProps["color"]>, string> = {
  default: "text-gray-900 dark:text-white",
  primary: "text-blue-600 dark:text-blue-400",
  secondary: "text-gray-600 dark:text-gray-300",
  muted: "text-gray-500 dark:text-gray-400",
  white: "text-white",
  black: "text-black",
};

const alignStyles: Record<NonNullable<HeadingProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const weightStyles: Record<NonNullable<HeadingProps["weight"]>, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export const Heading: React.FC<HeadingProps> = ({
  level = "h4",
  children,
  className = "font-header",
  align = "left",
  color = "default",
  weight,
  uppercase = false,
  truncate = false,
  italic = false,
}) => {
  const Tag = level;

  const baseStyles = headingStyles[level];
  const alignment = alignStyles[align];
  const textColor = colorStyles[color];
  const fontWeight = weight ? weightStyles[weight] : "";

  const classes = [
    baseStyles,
    alignment,
    textColor,
    fontWeight,
    uppercase && "uppercase",
    truncate && "truncate",
    italic && "italic",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
