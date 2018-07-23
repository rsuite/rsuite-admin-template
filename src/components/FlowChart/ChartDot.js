// @flow
import * as React from 'react';
import { toThousands, highlightValue } from '../../utils';

type Props = {
  data: number,
  x: number,
  y: number,
  title: React.Node
};

const ChartDot = ({ x, y, title, maxHeight, data }: Props) => (
  <div
    className="chart-item"
    style={{
      position: 'absolute',
      left: x,
      top: y
    }}
  >
    <div className="title">
      {title} <span className="value">{toThousands(data)}</span>
    </div>
    <div className="label">{highlightValue(data)}</div>
  </div>
);

export default ChartDot;
