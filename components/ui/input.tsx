import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "bg-input/20 dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border transition-colors focus-visible:ring-[2px] aria-invalid:ring-[2px] file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default:
          "h-9 px-3 py-2 text-base leading-tight file:h-7 file:text-base",
        sm: "h-7 px-2 py-1 text-sm leading-tight file:h-6 file:text-sm",
        lg: "h-11 px-4 py-2.5 text-lg leading-tight file:h-9 file:text-lg",
        xl: "h-12 px-4 py-3 text-xl leading-tight file:h-10 file:text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

function Input({ className, type, size = "default", ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
