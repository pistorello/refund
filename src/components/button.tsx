import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "cursor-pointer rounded-lg px-5",
  variants: {
    variant: {
      primary: `bg-green-100 hover:bg-green-200`,
    },
    size: {
      md: "w-full h-16",
    },
    disabled: "pointer-events-none opacity-70",
  },
});
