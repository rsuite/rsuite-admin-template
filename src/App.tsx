import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import locales from './locales';

import Frame from './components/Frame';
import Dashboard from './pages/dashboard';
import Error404 from './pages/error/404';
import Error500 from './pages/error/500';
import Members from './pages/list/members';

import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import ExclamationTriangleIcon from '@rsuite/icons/legacy/ExclamationTriangle';

const appNavs = [
  {
    eventKey: '1',
    icon: <DashboardIcon />,
    title: 'Dashboard',
    to: '/dashboard'
  },
  {
    eventKey: '2',
    icon: <GroupIcon />,
    title: 'Members',
    to: '/list-members'
  },
  {
    eventKey: '3',
    title: 'Errors',
    icon: <ExclamationTriangleIcon />,
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
            <Route path="list-members" element={<Members />} />
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
