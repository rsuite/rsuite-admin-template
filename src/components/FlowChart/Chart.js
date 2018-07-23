// @flow
import * as React from 'react';
import ChartDot from './ChartDot';
import ChartBar from './ChartBar';
import * as images from './images';

type Props = {
  gapWidth: number,
  maxHeight: number,
  data: Object
};

const polylineStyles = {
  fill: '#f7f7fa',
  stroke: '#8E8E93',
  strokeDasharray: '3,3',
  strokeWidth: 1
};

const svgStyles = {
  width: '100%',
  height: 1000
};

const Chart = ({ gapWidth, maxHeight, data }: Props) => {
  const minHeight = 64;
  const top = 10;
  const lowest = maxHeight - top;

  const pv = [gapWidth, top];
  const vv = [gapWidth * 2, lowest * (1 - data.vv / data.pv)];
  const uv = [gapWidth * 3, lowest * (1 - data.uv / data.pv)];
  const points = ['0,10', pv.join(','), vv.join(','), uv.join(','), `2000,${lowest}`];

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 200
      }}
    >
      <ChartDot x={pv[0]} y={pv[1]} title="Page View " data={data.pv} />
      <ChartDot x={vv[0]} y={vv[1]} title="Visit View" data={data.vv} />
      <ChartDot x={uv[0]} y={uv[1]} title="Unique Vistor" data={data.uv} />

      <img className="chart-img" src={images.pv} style={{ top: maxHeight, left: pv[0] }} />
      <img className="chart-img" src={images.vv} style={{ top: maxHeight, left: vv[0] }} />
      <img className="chart-img" src={images.uv} style={{ top: maxHeight, left: uv[0] }} />

      <svg style={svgStyles}>
        <polyline points={points.join(' ')} style={polylineStyles} />
        <circle cx={pv[0]} cy={pv[1]} r="6" strokeWidth="2" fill="#34c3ff" />
        <circle cx={vv[0]} cy={vv[1]} r="6" strokeWidth="2" fill="#34c3ff" />
        <circle cx={uv[0]} cy={uv[1]} r="6" strokeWidth="2" fill="#34c3ff" />

        <ChartBar data={pv} maxHeight={maxHeight} />
        <ChartBar data={vv} maxHeight={maxHeight} />
        <ChartBar data={uv} maxHeight={maxHeight} />
      </svg>
    </div>
  );
};

export default Chart;
