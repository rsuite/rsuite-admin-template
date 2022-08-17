import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper } from 'rsuite';
import { Link, Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import Header from '../Header';
import GithubIcon from '@rsuite/icons/legacy/Github';
import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';
import NavLink from '../NavLink';

const { getHeight, on } = DOMHelper;

const NavItem = props => {
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
  children?: NavItemData[];
}

export interface FrameProps {
  navs: NavItemData[];
  children?: React.ReactNode;
}

const Frame = (props: FrameProps) => {
  const { navs } = props;
  const [expand, setExpand] = useState(true);
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  const containerClasses = classNames('page-container', {
    'container-full': !expand
  });

  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 112, overflow: 'auto' }
    : {};

  return (
    <Container className="frame">
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <div className="header-hrand">
            <Link to="/">
              <AdvancedAnalyticsIcon style={{ fontSize: 22 }} />
              <span style={{ marginLeft: 16 }}>Admin Template</span>
            </Link>
          </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
          <Sidenav.Body style={navBodyStyle}>
            <Nav>
              {navs.map(item => {
                const { children, ...rest } = item;
                if (children) {
                  return (
                    <Nav.Menu key={item.eventKey} placement="rightStart" trigger="hover" {...rest}>
                      {children.map(child => {
                        return <NavItem key={child.eventKey} {...child} />;
                      })}
                    </Nav.Menu>
                  );
                }
                return <NavItem key={rest.eventKey} {...rest} />;
              })}
              <Nav.Item
                href="https://github.com/rsuite/rsuite-admin-template"
                icon={<GithubIcon />}
                target="_blank"
              >
                Github
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>

      <Container className={containerClasses}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
};

export default Frame;
