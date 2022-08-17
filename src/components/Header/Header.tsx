import React, { useRef } from 'react';
import { Dropdown, Popover, Whisper, WhisperInstance, Stack, Badge, Avatar } from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';

const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>Administrator</strong>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Your profile</Dropdown.Item>
        <Dropdown.Item>Your stars</Dropdown.Item>
        <Dropdown.Item>Your Gists</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item
          icon={<HelpOutlineIcon />}
          href="https://rsuitejs.com"
          target="_blank"
          as="a"
        >
          Help{' '}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const Header = () => {
  const trigger = useRef<WhisperInstance>(null);

  return (
    <Stack className="header" spacing={20}>
      <Badge content={5}>
        <NoticeIcon style={{ fontSize: 20 }} />
      </Badge>

      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
        <Stack spacing={6}>
          <Avatar
            size="sm"
            circle
            src="https://avatars.githubusercontent.com/u/1203827"
            alt="@simonguo"
          />
          <span>Admin</span>
        </Stack>
      </Whisper>
    </Stack>
  );
};

export default Header;
