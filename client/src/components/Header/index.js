import React from 'react';
import AuthNav from './nav/AuthNav';
import BasicNav from './nav/BasicNav';
import { StyledHeader } from './style';
import { useUser } from 'context/UserContext';
import { StyledNavLink } from 'shared/components';
import { MainNav } from './nav/style';
import img from '../../assests/5946b26c-e938-46c9-b874-4bb1a671b7b6.webp'
import { NavItem } from './nav/style';

const Header = () => {
  const user = useUser();

  return (
    <StyledHeader>
      <MainNav>
        <ul style={{position: 'relative'}}>
          <StyledNavLink to="/profiles">All profiles</StyledNavLink>
          <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
        <img src={img} height={40} width={40} />
      </div>
          <div>{user ? <AuthNav /> : <BasicNav />}</div>
        </ul>
      </MainNav>
    </StyledHeader>
  );
};

export default Header;
