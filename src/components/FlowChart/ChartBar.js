// @flow
import * as React from 'react';

type Props = {
  data: Array<number>,
  maxHeight: number
};

const lineStyles = {
  stroke: '#34c3ff',
  strokeWidth: 1
};

const ChartBar = ({ data, maxHeight }: Props) => (
  <line x1={data[0]} y1={data[1]} x2={data[0]} y2={maxHeight} style={lineStyles} />
);

export default ChartBar;
