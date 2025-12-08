'use client';

import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Copyright from '@/components/Copyright';
import PageToolbar from '@/components/PageToolbar';

export default function DashboardPage() {
  return (
    <Panel header="Dashboard">
      <PageToolbar />
      <Dashboard />
      <Copyright />
    </Panel>
  );
}
