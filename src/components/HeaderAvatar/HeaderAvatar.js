//@flow

import * as React from 'react';
import { Dropdown, Popover, Whisper, Icon } from 'rsuite';

const Menu = ({ onSelect }) => (
  <Dropdown.Menu onSelect={onSelect}>
    <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
      <p>Signed in as</p>
      <strong>Foobar</strong>
    </Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Your profile</Dropdown.Item>
    <Dropdown.Item>Your stars</Dropdown.Item>
    <Dropdown.Item>Your Gists</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Help</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown.Menu>
);

const MenuPopover = ({ onSelect, ...rest }) => (
  <Popover {...rest} full>
    <Menu onSelect={onSelect} />
  </Popover>
);

type Props = {};
class HeaderAvatar extends React.Component<Props> {
  trigger = null;
  handleSelectMenu = (eventKey: any, event: SyntheticEvent<*>) => {
    if (this.trigger) {
      this.trigger.hide();
    }
  };
  render() {
    return (
      <div className="header-avatar">
        <Whisper
          placement="bottomRight"
          trigger="click"
          triggerRef={ref => {
            this.trigger = ref;
          }}
          speaker={<MenuPopover onSelect={this.handleSelectMenu} />}
        >
          <Icon icon="user-circle-o" size="lg" />
        </Whisper>
      </div>
    );
  }
}

export default HeaderAvatar;
