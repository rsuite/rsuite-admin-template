import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import { FiArrowLeft } from 'react-icons/fi';

const Error503 = () => (
  <ErrorPage code={503}>
    <p className="error-page-title">Oops… You just found an error page</p>
    <p className="error-page-subtitle text-muted ">This page is being updated and maintained.</p>
    <IconButton icon={<FiArrowLeft />} appearance="primary" href="/">
      Take me home
    </IconButton>
  </ErrorPage>
);

export default Error503;
