import React from 'react';
import { Navbar, Nav } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/ArrowRight';
import AngleLeftIcon from '@rsuite/icons/ArrowLeft';

interface NavToggleProps {
  expand?: boolean;
  onChange?: () => void;
}

const NavToggle = ({ expand, onChange }: NavToggleProps) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavToggle;
