import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";
import type { ComponentProps } from "react";

const iconButtonVariants = tv({
  base: "inline-flex items-center justify-center cursor-pointer select-none",
  variants: {
    variant: {
      primary: "bg-green-100 hover:bg-green-200",
    },
    size: {
      md: "w-12 h-12 rounded-lg",
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

const iconButtonIconVariants = tv({
  base: "fill-white select-none",
  variants: {
    size: {
      md: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants>,
    Omit<ComponentProps<"button">, "size" | "disabled"> {
  disabled?: boolean;
  icon: ComponentProps<typeof Icon>["svg"];
}

export default function IconButton({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={iconButtonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        className={iconButtonIconVariants({ size, className })}
        svg={icon}
        size="md"
      />
    </button>
  );
}
