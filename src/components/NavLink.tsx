import React from 'react';
import { NavLinkProps, NavLink as BaseNavLink } from 'react-router-dom';

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, ...rest }, ref) => {
    return (
      <BaseNavLink ref={ref} to={to} {...rest}>
        {children}
      </BaseNavLink>
    );
  }
);

export default NavLink;
