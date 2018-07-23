import * as React from 'react';
import FlowChart from '../../components/FlowChart';

const data = {
  pv: 201702564,
  vv: 50700524,
  uv: 35200544
};

export default () => <FlowChart data={data} />;
