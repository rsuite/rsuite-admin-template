'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Popover,
  Whisper,
  WhisperInstance,
  HStack,
  VStack,
  Avatar,
  Menu,
  Divider,
  Text,
  Sidenav,
  SegmentedControl
} from 'rsuite';
import {
  BsSun,
  BsMoon,
  BsDisplay,
  BsPersonCircle,
  BsGear,
  BsQuestionCircle,
  BsBoxArrowRight
} from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';

interface SidebarFooterProps {
  isExpanded: boolean;
  onToggle: () => void;
}

type ThemeMode = 'light' | 'dark' | 'system';

// User menu popover
const renderUserMenu = (
  { onClose, left, top, className }: any,
  ref: any,
  theme: ThemeMode,
  onThemeChange: (value: ThemeMode) => void
) => {
  const handleSelect = (eventKey?: string | number) => {
    onClose();
    console.log(eventKey);
  };

  return (
    <Popover ref={ref} className={className} style={{ left, top, width: 280 }} full>
      <HStack spacing={12} style={{ padding: '16px' }}>
        <Avatar size="lg" circle src="https://i.pravatar.cc/150?u=1203827" alt="@admin" />
        <VStack spacing={4} alignItems="flex-start">
          <Text weight="semibold">Administrator</Text>
          <Text size="sm" muted>
            admin@example.com
          </Text>
        </VStack>
      </HStack>
      <Divider />

      {/* Theme Switcher */}
      <VStack spacing={8} style={{ padding: '12px 16px' }}>
        <Text size="xs" weight="semibold" muted>
          THEME
        </Text>
        <SegmentedControl
          value={theme}
          onChange={value => onThemeChange(value as ThemeMode)}
          size="sm"
          block
          data={[
            {
              label: (
                <HStack spacing={4}>
                  <BsDisplay />
                  <span>System</span>
                </HStack>
              ),
              value: 'system'
            },
            {
              label: (
                <HStack spacing={4}>
                  <BsSun />
                  <span>Light</span>
                </HStack>
              ),
              value: 'light'
            },
            {
              label: (
                <HStack spacing={4}>
                  <BsMoon />
                  <span>Dark</span>
                </HStack>
              ),
              value: 'dark'
            }
          ]}
        />
      </VStack>

      <Divider />
      <Menu onSelect={handleSelect}>
        <Menu.Item eventKey="profile" icon={<BsPersonCircle />}>
          Profile & Account
        </Menu.Item>
        <Menu.Item eventKey="status" icon={<FiActivity />}>
          Set Status
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item eventKey="settings" icon={<BsGear />}>
          Settings
        </Menu.Item>
        <Menu.Item eventKey="help" icon={<BsQuestionCircle />}>
          Help & Support
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item eventKey="signout" icon={<BsBoxArrowRight />}>
          Sign Out
        </Menu.Item>
      </Menu>
    </Popover>
  );
};

const SidebarFooter: React.FC<SidebarFooterProps> = () => {
  const whisperRef = useRef<WhisperInstance>(null);
  const [theme, setTheme] = useState<ThemeMode>('system');

  // Apply theme on mount and when theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const applyTheme = (mode: ThemeMode) => {
      const html = document.documentElement;

      if (mode === 'system') {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        html.classList.toggle('rs-theme-dark', prefersDark);
      } else {
        html.setAttribute('data-theme', mode);
        html.classList.toggle('rs-theme-dark', mode === 'dark');
      }
    };

    // Load saved theme from localStorage
    const savedTheme =
      typeof window !== 'undefined' ? (localStorage.getItem('theme') as ThemeMode | null) : null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }

    // Listen for system theme changes when in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const html = document.documentElement;
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        html.classList.toggle('rs-theme-dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    const html = document.documentElement;
    if (newTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      html.classList.toggle('rs-theme-dark', prefersDark);
    } else {
      html.setAttribute('data-theme', newTheme);
      html.classList.toggle('rs-theme-dark', newTheme === 'dark');
    }
  };

  return (
    <Sidenav.Footer style={{ padding: 0 }}>
      <Whisper
        placement="topStart"
        trigger="click"
        ref={whisperRef}
        speaker={(props, ref) => renderUserMenu(props, ref, theme, handleThemeChange)}
      >
        <HStack spacing={12} cursor="pointer" px={16} py={12} width="100%">
          <Avatar size="sm" circle src="https://i.pravatar.cc/150?u=1203827" alt="@admin" />
          <VStack spacing={2} alignItems="flex-start" style={{ flex: 1, minWidth: 0 }}>
            <Text weight="semibold" size="sm">
              Administrator
            </Text>
            <Text size="xs" muted width="100%">
              admin@example.com
            </Text>
          </VStack>
        </HStack>
      </Whisper>
    </Sidenav.Footer>
  );
};

export default SidebarFooter;
