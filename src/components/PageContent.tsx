import { Panel, PanelProps } from 'rsuite';
import classNames from 'classnames';
import Copyright from '@/components/Copyright';

const PageContent = (props: PanelProps) => {
  const { className, ...rest } = props;
  return (
    <>
      <Panel as="div" className={classNames('page-content', className)} {...rest} />
      <Copyright />
    </>
  );
};

export default PageContent;
