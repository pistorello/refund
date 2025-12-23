import { createElement, type JSX, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "font-sans text-gray-100",
  variants: {
    variant: {
      "heading-large": "text-2xl leading-6 font-bold",
      "heading-medium": "text-lg leading-5 font-bold",
      "heading-small": "text-sm leading-4 font-bold",
      "paragraph-medium": "text-base leading-4 font-medium",
      "label-small": "text-xs leading-4 font-light uppercase",
    },
  },
  defaultVariants: {
    variant: "paragraph-medium",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ReactNode;
}

export default function Text({
  as = "span",
  className,
  variant,
  children,
  ...props
}: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
