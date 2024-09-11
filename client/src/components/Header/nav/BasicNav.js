import React from 'react';
import { StyledNavLink } from 'shared/components';
import { NavItem } from './style';
import img from '../../../assests/5946b26c-e938-46c9-b874-4bb1a671b7b6.webp'

export default function BasicNav() {
  return (
    <>
      <NavItem>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink data-cy="nav-signin-link" to="/signin">
          Sign In
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink data-cy="nav-signup-link" to="/signup">
          Sign Up
        </StyledNavLink>
      </NavItem>
    </>
  );
}
