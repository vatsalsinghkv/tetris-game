import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-visible:ring-accent-primary hover:bg-bg-primary/90 group relative inline-flex cursor-pointer items-center justify-center rounded-lg text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-dark-3 hover:bg-dark-2',
        accent: 'bg-accent-primary text-white hover:backdrop-opacity-50',
        invert: 'bg-text-base text-bg-secondary hover:bg-text-secondary',
        outlined:
          'focus:bg-text-dark-1 border border-dark-1 bg-transparent text-text-base hover:bg-text-base hover:text-bg-primary focus:bg-text-base focus:text-bg-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 text-sm rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'px-8 py-4 font-bold',
        icon: 'h-8 w-8 text-sm',
      },
      center: {
        true: 'mx-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface Props
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({ children, className, variant, size, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
