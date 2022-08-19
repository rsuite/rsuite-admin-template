import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import { Icon } from '@rsuite/icons';
import { VscDashboard, VscTable, VscWorkspaceTrusted } from 'react-icons/vsc';
import locales from './locales';
import Frame from './components/Frame';
import DashboardPage from './pages/dashboard';
import Error404Page from './pages/authentication/404';
import Error500Page from './pages/authentication/500';
import SignInPage from './pages/authentication/sign-in';
import MembersPage from './pages/tables/members';
import VirtualizedTablePage from './pages/tables/virtualized';

const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <Icon as={VscDashboard} />,
    title: 'Dashboard',
    to: '/dashboard'
  },
  {
    eventKey: 'tables',
    icon: <Icon as={VscTable} />,
    title: 'Tables',
    to: '/table-members',
    children: [
      {
        eventKey: 'members',
        title: 'Members',
        to: '/table-members'
      },
      {
        eventKey: 'virtualized',
        title: 'Virtualized Table',
        to: '/table-virtualized'
      }
    ]
  },
  {
    eventKey: 'authentication',
    title: 'Authentication',
    icon: <Icon as={VscWorkspaceTrusted} />,
    children: [
      {
        eventKey: 'sign-in',
        title: 'Sign In',
        to: '/sign-in'
      },
      {
        eventKey: 'error400',
        title: 'Error 404',
        to: '/error-404'
      },
      {
        eventKey: 'error500',
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
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="table-members" element={<MembersPage />} />
            <Route path="table-virtualized" element={<VirtualizedTablePage />} />
            <Route path="error-404" element={<Error404Page />} />
            <Route path="error-500" element={<Error500Page />} />
            <Route path="sign-in" element={<SignInPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </CustomProvider>
    </IntlProvider>
  );
};

export default App;
