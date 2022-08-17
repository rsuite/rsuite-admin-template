import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import { Icon } from '@rsuite/icons';
import { VscDashboard, VscTable, VscError } from 'react-icons/vsc';
import locales from './locales';
import Frame from './components/Frame';
import Dashboard from './pages/dashboard';
import Error404 from './pages/error/404';
import Error500 from './pages/error/500';
import Members from './pages/tables/members';
import VirtualizedTable from './pages/tables/virtualized';

const appNavs = [
  {
    eventKey: '1',
    icon: <Icon as={VscDashboard} />,
    title: 'Dashboard',
    to: '/dashboard'
  },
  {
    eventKey: '2',
    icon: <Icon as={VscTable} />,
    title: 'Tables',
    to: '/table-members',
    children: [
      {
        eventKey: '3-1',
        title: 'Members',
        to: '/table-members'
      },
      {
        eventKey: '3-2',
        title: 'Virtualized Table',
        to: '/table-virtualized'
      }
    ]
  },
  {
    eventKey: '3',
    title: 'Error pages',
    icon: <Icon as={VscError} />,
    children: [
      {
        eventKey: '3-1',
        title: 'Error 404',
        to: '/error-404'
      },
      {
        eventKey: '3-2',
        title: 'Error 500',
        to: '/error-500'
      }
    ]
  }
];

const App = () => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <CustomProvider locale={enGB}>
        <Routes>
          <Route path="/" element={<Frame navs={appNavs} />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="table-members" element={<Members />} />
            <Route path="table-virtualized" element={<VirtualizedTable />} />
            <Route path="error-404" element={<Error404 />} />
            <Route path="error-500" element={<Error500 />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CustomProvider>
    </IntlProvider>
  );
};

export default App;
