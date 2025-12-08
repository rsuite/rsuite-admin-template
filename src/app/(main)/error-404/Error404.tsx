import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import { FiArrowLeft } from 'react-icons/fi';

const Error404 = () => (
  <ErrorPage code={404}>
    <p className="error-page-title">Oops… You just found an error page</p>
    <p className="error-page-subtitle text-muted ">
      We are sorry but the page you are looking for was not found
    </p>
    <IconButton icon={<FiArrowLeft />} appearance="primary" href="/">
      Take me home
    </IconButton>
  </ErrorPage>
);

export default Error404;
