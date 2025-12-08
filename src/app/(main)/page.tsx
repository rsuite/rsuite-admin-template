'use client';

import { Panel } from 'rsuite';
import Dashboard from './dashboard/Dashboard';
import Copyright from '@/components/Copyright';
import PageToolbar from '@/components/PageToolbar';

export default function HomePage() {
  return (
    <Panel header="Dashboard">
      <PageToolbar />
      <Dashboard />
      <Copyright />
    </Panel>
  );
}
