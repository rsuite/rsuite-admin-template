'use client';

import dynamic from 'next/dynamic';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Copyright from '@/components/Copyright';

const PageToolbar = dynamic(() => import('@/components/PageToolbar'), { ssr: false });

export default function DashboardPage() {
  return (
    <Panel header="Dashboard">
      <PageToolbar />
      <Dashboard />
      <Copyright />
    </Panel>
  );
}
