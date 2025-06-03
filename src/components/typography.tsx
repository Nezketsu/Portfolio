import React from "react";
import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "tracking-tight font-semibold",
  variants: {
    font: {
      marc: "font-marc",
      frick: "font-frick",
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
    size: {
      xs: "text-lg",
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl",
      "2xl": "text-5xl",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  }
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: "marc" | "frick" | "sans" | "serif" | "mono";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "default" | "primary" | "secondary" | "accent";
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  font,
  size,
  color,
  className,
  children,
  ...props
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = headingStyles({ font, size, color, class: className });

  return React.createElement(
    Tag,
    { className: classes, ...props },
    children
  );
};

const textStyles = tv({
  base: "text-foreground",
  variants: {
    font: {
      marc: "font-marc",
      frick: "font-frick",
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  }
});

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  font?: "marc" | "frick" | "sans" | "serif" | "mono";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
}

export const Text: React.FC<TextProps> = ({
  font,
  size,
  weight,
  className,
  children,
  ...props
}) => {
  const classes = textStyles({ font, size, weight, class: className });

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
