import React, { useState, useRef } from 'react';
import { Affix, Stack, DateRangePicker, IconButton, SelectPicker } from 'rsuite';
import SettingIcon from '@rsuite/icons/Setting';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';

import type { RangeType } from 'rsuite/DateRangePicker';

interface Range extends RangeType {
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
          background: '#fff',
          marginBottom: 20,
          padding: 4,
          borderRadius: fixed ? 0 : 6,
          boxShadow: fixed ? '0 0 15px 0 rgb(0 0 0 / 10%)' : undefined
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
            ranges={predefinedRanges}
            container={() => containerRef.current as HTMLDivElement}
          />
        </Stack>

        <IconButton icon={<SettingIcon style={{ fontSize: 20 }} />} />
      </Stack>
    </Affix>
  );
};

export default PageToolbar;
