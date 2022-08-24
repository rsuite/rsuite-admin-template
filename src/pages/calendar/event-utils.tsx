import { EventInput } from '@fullcalendar/react';
import uniqueId from 'lodash/uniqueId';
import { startOfMonth, addDays, format, endOfMonth } from 'date-fns';

const today = new Date();
const firstDay = startOfMonth(today);
const lastDay = endOfMonth(today);
const todayStr = format(today, 'yyyy-MM-dd');

console.log(todayStr);

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: uniqueId(),
    title: '🎊 Project kick-off meeting',
    allDay: true,
    start: format(firstDay, 'yyyy-MM-dd')
  },
  {
    id: uniqueId(),
    title: '🎉 Product launch',
    start: format(addDays(firstDay, 2), 'yyyy-MM-dd') + 'T10:00:00'
  },

  {
    id: uniqueId(),
    title: 'Product training.',
    start: format(addDays(firstDay, 3), 'yyyy-MM-dd') + 'T10:00:00'
  },
  {
    id: uniqueId(),
    title: 'Product Demo',
    start: format(addDays(firstDay, 3), 'yyyy-MM-dd') + 'T11:00:00'
  },
  {
    id: uniqueId(),
    title: 'Product Exam',
    start: format(addDays(firstDay, 3), 'yyyy-MM-dd') + 'T12:00:00'
  },

  {
    id: uniqueId(),
    title: 'Monitoring and alerting service design communication',
    start: format(addDays(firstDay, 5), 'yyyy-MM-dd') + 'T10:00:00'
  },
  {
    id: uniqueId(),
    title: 'Design system brainstorming',
    start: format(addDays(firstDay, 5), 'yyyy-MM-dd') + 'T11:00:00'
  },

  {
    id: uniqueId(),
    title: 'Test Case Review',
    start: format(addDays(firstDay, 15), 'yyyy-MM-dd') + 'T14:00:00'
  },
  {
    id: uniqueId(),
    title: 'Development Design Review',
    start: format(addDays(firstDay, 15), 'yyyy-MM-dd') + 'T16:00:00'
  },

  {
    id: uniqueId(),
    title: '💎 Product meeting',
    start: todayStr + 'T09:00:00',
    end: todayStr + 'T10:30:00'
  },
  {
    id: uniqueId(),
    title: '👨‍💻 Coding ',
    start: todayStr + 'T10:00:00',
    end: todayStr + 'T11:30:00'
  },
  {
    id: uniqueId(),
    title: '📖 Leadership training',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T14:00:00'
  },
  {
    id: uniqueId(),
    title: '☕️ Afternoon tea time',
    start: todayStr + 'T14:00:00',
    end: todayStr + 'T16:00:00'
  },
  {
    id: uniqueId(),
    title: 'Interview engineers.',
    start: todayStr + 'T16:00:00',
    end: todayStr + 'T18:00:00'
  },
  {
    id: uniqueId(),
    title: '🎉 Product release',
    allDay: true,
    start: format(lastDay, 'yyyy-MM-dd') + 'T14:00:00'
  },
  {
    id: uniqueId(),
    title: '🔬 Product acceptance',
    start: format(lastDay, 'yyyy-MM-dd') + 'T16:00:00'
  }
];
