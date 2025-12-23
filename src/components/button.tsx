import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

const buttonVariants = tv({
  base: "cursor-pointer select-none",
  variants: {
    variant: {
      primary: `bg-green-100 hover:bg-green-200`,
    },
    size: {
      md: "w-full h-12 rounded-lg px-5",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<ComponentProps<"button">, "size" | "disabled"> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Text as="label" variant="heading-small" className="text-white">
        {children}
      </Text>
    </button>
  );
}
