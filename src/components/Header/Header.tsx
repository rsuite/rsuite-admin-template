import React, { useRef } from 'react';
import {
  Dropdown,
  Popover,
  Whisper,
  WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton
} from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import GithubIcon from '@rsuite/icons/legacy/Github';
import HeartIcon from '@rsuite/icons/legacy/HeartO';

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
        <Dropdown.Item>Set status</Dropdown.Item>
        <Dropdown.Item>Profile & account</Dropdown.Item>
        <Dropdown.Item>Feedback</Dropdown.Item>
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
    <Stack className="header" spacing={8}>
      <IconButton
        icon={<HeartIcon style={{ fontSize: 20 }} color="red" />}
        href="https://opencollective.com/rsuite"
        target="_blank"
      />
      <IconButton
        icon={<GithubIcon style={{ fontSize: 20 }} />}
        href="https://github.com/rsuite/rsuite-admin-template"
        target="_blank"
      />
      <IconButton
        icon={
          <Badge content={5}>
            <NoticeIcon style={{ fontSize: 20 }} />
          </Badge>
        }
      />

      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
        <Avatar
          size="sm"
          circle
          src="https://avatars.githubusercontent.com/u/1203827"
          alt="@simonguo"
          style={{ marginLeft: 8 }}
        />
      </Whisper>
    </Stack>
  );
};

export default Header;
