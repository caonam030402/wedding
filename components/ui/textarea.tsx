import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "border-input bg-input/20 dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 resize-none rounded-md border transition-colors focus-visible:ring-[2px] aria-invalid:ring-[2px] placeholder:text-muted-foreground flex field-sizing-content w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 leading-tight",
  {
    variants: {
      size: {
        default: "min-h-20 px-3 py-2 text-base",
        sm: "min-h-16 px-2 py-1.5 text-sm",
        lg: "min-h-24 px-4 py-2.5 text-lg",
        xl: "min-h-32 px-4 py-3 text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size">,
    VariantProps<typeof textareaVariants> {}

function Textarea({ className, size = "default", ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, className }))}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
