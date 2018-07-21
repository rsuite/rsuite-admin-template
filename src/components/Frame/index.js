// @flow

import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Container, Sidebar, Sidenav, Icon, Header, Content, Dropdown, Nav } from 'rsuite';
import NavToggle from './NavToggle';
import { getHeight, on } from 'dom-lib';

type State = {
  windowHeight: number,
  expand: boolean
};

type Props = {
  children: React.Node
};

class Frame extends React.Component<Props, State> {
  resizeListenner = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      windowHeight: getHeight(window),
      expand: true
    };
    this.resizeListenner = on(window, 'resize', this.updateHeight);
  }
  updateHeight = () => {
    this.setState({
      windowHeight: getHeight(window)
    });
  };
  handleToggle = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  componentWillUnmount() {
    if (this.resizeListenner) {
      this.resizeListenner.off();
    }
  }
  render() {
    const { children } = this.props;
    const { expand, windowHeight } = this.state;

    const containerClasses = classNames('page-container', {
      'container-full': !expand
    });

    let navBodyStyle = null;
    if (expand) {
      navBodyStyle = {
        height: windowHeight - 112,
        overflow: 'auto'
      };
    }

    return (
      <Container className="frame">
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div className="header-hrand">
              <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
              <span style={{ marginLeft: 12 }}> RSUITE ANALYTICS</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={['3']}
            defaultActiveKey="2"
            appearance="subtle"
          >
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item
                  eventKey="2"
                  icon={<Icon icon="group" />}
                  componentClass={Link}
                  to="/list/members"
                >
                  Members
                </Nav.Item>
                <Dropdown
                  placement="rightTop"
                  eventKey="3"
                  trigger="hover"
                  title="Errors"
                  icon={<Icon icon="exclamation-triangle" />}
                >
                  <Dropdown.Item eventKey="3-1" componentClass={Link} to="/error/404">
                    404
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3-2" componentClass={Link} to="/error/500">
                    500
                  </Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>

        <Container className={containerClasses}>
          <Content>{children}</Content>
        </Container>
      </Container>
    );
  }
}

export default Frame;
