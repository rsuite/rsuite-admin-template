'use client';

import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  to?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, ...rest }, ref) => {
    if (!to) {
      return (
        <a ref={ref} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link ref={ref} href={to} {...rest}>
        {children}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export default NavLink;
