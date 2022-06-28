import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  href: string;
  exact?: boolean;
  children?: ReactNode | ((props: { isActive: boolean }) => ReactNode);
};

const NavLink = ({ href, exact, children, ...props }: Props) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      {typeof children === "function" ? children({ isActive }) : children}
    </Link>
  );
};

export default NavLink;
