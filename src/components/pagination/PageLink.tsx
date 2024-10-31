import { HTMLProps } from "react";
import "./style.scss";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className = "",
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = `page-link ${className} ${active ? "active" : ""} ${
    disabled ? "disabled" : ""
  }`.trim();

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
