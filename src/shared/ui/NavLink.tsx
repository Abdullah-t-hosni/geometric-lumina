import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

type ClassValueFn = (props: {
  isActive: boolean;
  isPending: boolean;
}) => string;

const variants = {
  default: "text-creamy-white/60 hover:text-white transition-colors",
  ghost: "hover:bg-white/5 transition-colors rounded-md px-3 py-2",
  underline: "relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-neon-yellow after:transition-transform after:duration-300",
};

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string | ClassValueFn;
  activeClassName?: string;
  pendingClassName?: string;
  variant?: keyof typeof variants | "none";
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, variant = "none", to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          const base =
            typeof className === "function"
              ? className({ isActive, isPending })
              : className;

          const variantClass = variant !== "none" ? variants[variant as keyof typeof variants] : "";

          return cn(
            variantClass,
            base,
            isActive && activeClassName,
            isPending && pendingClassName
          );
        }}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
