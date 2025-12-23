import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

const inputTextContainerVariants = tv({
  base: "flex flex-col gap-2 group",
});

const inputTextWrapperVariants = tv({
  base: "flex items-center justify-center transition",
  variants: {
    variant: {
      primary: `
        bg-transparent border 
        border-gray-300 focus-within:border-green-100
      `,
    },
    size: {
      md: "w-full h-12 p-4 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const inputTextVariants = tv({
  base: "appearance-none outline-none",
  variants: {
    variant: {
      primary: `caret-green-100 text-gray-100 placeholder:text-gray-200`,
    },
    size: {
      md: "w-full h-full text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<ComponentProps<"input">, "size"> {
  classname?: string;
  children: string;
}

export default function InputText({
  variant,
  size,
  classname,
  children,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants()}>
      <Text
        variant="label-small"
        className="text-gray-200 group-focus-within:text-green-100 group-focus-within:font-semibold transition"
      >
        {children}
      </Text>
      <label className={inputTextWrapperVariants({ variant, size })}>
        <input
          className={inputTextVariants({ variant, size, className: classname })}
          {...props}
        />
      </label>
    </div>
  );
}
