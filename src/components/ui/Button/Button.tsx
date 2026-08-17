import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;
  const combined = className ? `${variantClass} ${className}` : variantClass;

  const isInternalAnchor = href.startsWith("#");

  if (isInternalAnchor) {
    return (
      <a href={href} className={combined} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined} {...rest}>
      {children}
    </Link>
  );
}
