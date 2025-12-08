'use client';

import { useState, useRef } from 'react';
import { Affix, Stack, DateRangePicker, IconButton, SelectPicker } from 'rsuite';
import SettingIcon from '@rsuite/icons/Setting';
import {
  subDays,
  startOfWeek,
  endOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  addMonths
} from 'date-fns';

interface Range {
  label: string;
  // A fixed range or a function range that computes a date range from current value
  value: [Date, Date] | ((value?: [Date, Date] | null) => [Date, Date]);
  placement?: 'top' | 'bottom' | 'left' | 'right';
  closeOverlay?: boolean;
  appearance?: 'default' | 'primary' | 'link' | 'subtle' | 'ghost';
}

const predefinedRanges: Range[] = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    placement: 'left'
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: 'left'
  },
  {
    label: 'This week',
    value: [startOfWeek(new Date()), endOfWeek(new Date())],
    placement: 'left'
  },
  {
    label: 'Last 7 days',
    value: [subDays(new Date(), 6), new Date()],
    placement: 'left'
  },
  {
    label: 'Last 30 days',
    value: [subDays(new Date(), 29), new Date()],
    placement: 'left'
  },
  {
    label: 'This month',
    value: [startOfMonth(new Date()), new Date()],
    placement: 'left'
  },
  {
    label: 'Last month',
    value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
    placement: 'left'
  },
  {
    label: 'This year',
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
    placement: 'left'
  },
  {
    label: 'Last year',
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
    placement: 'left'
  },
  {
    label: 'All time',
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
    placement: 'left'
  },
  {
    label: 'Last week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
      ];
    },
    appearance: 'default'
  },
  {
    label: 'Next week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
      ];
    },
    appearance: 'default'
  }
];

const PageToolbar = () => {
  const [fixed, setFixed] = useState<boolean | undefined>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Affix onChange={setFixed}>
      <Stack
        spacing={10}
        justifyContent="space-between"
        ref={containerRef}
        style={{
          position: 'relative',
          background: 'var(--bg-panel)',
          marginBottom: 20,
          padding: 4,
          borderRadius: fixed ? 0 : 6,
          boxShadow: fixed ? 'var(--toolbar-shadow-elevated)' : undefined
        }}
      >
        <Stack spacing={10}>
          <SelectPicker
            defaultValue="Daily"
            cleanable={false}
            searchable={false}
            appearance="subtle"
            container={() => containerRef.current as HTMLDivElement}
            data={[
              { label: 'Daily', value: 'Daily' },
              { label: 'Weekly', value: 'Weekly' },
              { label: 'Monthly', value: 'Monthly' }
            ]}
          />
          <DateRangePicker
            appearance="subtle"
            defaultValue={[new Date(), new Date()]}
            showOneCalendar
            ranges={predefinedRanges as any}
            container={() => containerRef.current as HTMLDivElement}
          />
        </Stack>

        <IconButton icon={<SettingIcon style={{ fontSize: 20 }} />} />
      </Stack>
    </Affix>
  );
};

export default PageToolbar;
