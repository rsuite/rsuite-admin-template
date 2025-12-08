/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useState } from 'react';
import { Container, Sidebar, Sidenav, Content, Nav, useMediaQuery } from 'rsuite';
import NavLink from '../NavLink';
import Brand from '../Brand';
import SidebarFooter from './SidebarFooter';

const NavItem = (props: any) => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
      {title}
    </Nav.Item>
  );
};

export interface NavItemData {
  eventKey: string;
  title: string;
  icon?: any;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

export interface FrameProps {
  navs: NavItemData[];
  children?: React.ReactNode;
}

const Frame = (props: FrameProps) => {
  const { navs } = props;
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const isExpanded = expanded && !isMobile;

  return (
    <Container className="frame">
      <Sidebar h="100vh" width={isExpanded ? 260 : 56} collapsible>
        <Sidenav expanded={isExpanded} defaultOpenKeys={['2', '3']} h="100%" appearance="subtle">
          <Sidenav.Header borderBottom="1px solid var(--rs-divider-border)">
            <Brand collapsed={!isExpanded} />
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              {navs.map(item => {
                const { children, ...rest } = item;
                if (children) {
                  return (
                    <Nav.Menu
                      key={item.eventKey}
                      title={item.title}
                      icon={item.icon}
                      eventKey={item.eventKey}
                    >
                      {children.map(child => {
                        return <NavItem key={child.eventKey} {...child} />;
                      })}
                    </Nav.Menu>
                  );
                }

                if (rest.target === '_blank') {
                  return (
                    <Nav.Item key={item.eventKey} icon={item.icon} {...rest}>
                      {item.title}
                    </Nav.Item>
                  );
                }

                return <NavItem key={rest.eventKey} {...rest} />;
              })}
            </Nav>
          </Sidenav.Body>
          <SidebarFooter isExpanded={isExpanded} onToggle={() => setExpanded(!expanded)} />
        </Sidenav>
      </Sidebar>

      <Container>
        <Content>{props.children}</Content>
      </Container>
    </Container>
  );
};

export default Frame;
