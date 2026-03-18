import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva(["font-sans", "text-gray-400"], {
  variants: {
    variant: {
      bodySmBold: ["text-sm", "leading-5", "font-semibold"],
      bodyMd: ["text-base", "leading-6", "font-normal"],
      bodyMdBold: ["text-base", "leading-6", "font-semibold"],
    },
  }, 
  defaultVariants: {
    variant: "bodyMd",
  },
});

interface TextProps extends VariantProps<typeof textVariants>{
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode
}

export default function Text({ as = "span", variant, className, children, ...props}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}