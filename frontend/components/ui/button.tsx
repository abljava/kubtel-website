'use client'
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        transparent: 'border-none bg-none hover:opacity-70 transition-opacity',
        kubtel:
          'w-fit text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-magentaGradient-end via-magentaGradient-end from-magentaGradient-start bg-[length:200%_200%] bg-pos-0 hover:bg-pos-100 shadow-button hover:shadow-buttonHover active:bg-pos-0 active:shadow-buttonPressed duration-300',
        white:
          'bg-white text-foreground text-[10px]/[12px] font-bold rounded-lg p-3 ',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-[50px] rounded-md px-8',
        md: 'h-12 rounded-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    // const Comp = asChild ? Slot : (href ? Link : 'button'); // Используем Link, если есть href
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
