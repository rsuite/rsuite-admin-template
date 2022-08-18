import React from 'react';
import classNames from 'classnames';
import Chart from 'react-apexcharts';

interface ColorfulChartProps {
  className?: string;
  title: string;
  data: any;
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
  options?: any;
}

const defaultOptions = {
  chart: {
    id: 'sparkline1',
    type: 'line',
    height: 140,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    cssClass: 'tooltip-custom',
    marker: {
      show: false
    },
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },
  colors: ['#fff']
};

const ColorfulChart = ({ className, title, data, type, options }: ColorfulChartProps) => (
  <div className={classNames('colorful-chart', className)}>
    <h3>{title}</h3>
    <Chart
      series={data}
      type={type}
      height={100}
      options={Object.assign({}, defaultOptions, options)}
    />
  </div>
);

export default ColorfulChart;
