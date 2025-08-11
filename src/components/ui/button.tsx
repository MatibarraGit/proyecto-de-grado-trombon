import * as React from "react"
import Link, { LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
}

// Discriminated union for button vs link
type ButtonAsButton = BaseButtonProps &
  VariantProps<typeof buttonVariants> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'href'> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  VariantProps<typeof buttonVariants> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: LinkProps['href'];
  } & Pick<LinkProps, 'href' | 'prefetch' | 'replace' | 'scroll' | 'shallow' | 'locale'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button({ href, className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    const { children, ...linkProps } = props as ButtonAsLink;
    return (
      <Link {...linkProps} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
