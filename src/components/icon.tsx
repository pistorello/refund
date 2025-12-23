import type { ComponentProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const iconVariants = tv({
  base: "inline-block",
  variants: {
    animate: {
      true: "animate-spin",
    },
    size: {
      md: "w-6 h-6",
    },
  },
  defaultVariants: {
    animate: false,
    size: "md",
  },
});

interface IconProps
  extends VariantProps<typeof iconVariants>,
    ComponentProps<"svg"> {
  svg: FC<ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  size,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({ animate, size, className })}
      {...props}
    />
  );
}
