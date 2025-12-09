'use client';

import classNames from 'classnames';
import Chart, { Props as ChartProps } from 'react-apexcharts';
import './colorful-chart.css';

interface ColorfulChartProps {
  className?: string;
  title: string;
  data: ChartProps['series'];
  type?: ChartProps['type'];
  options?: ChartProps['options'];
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
  colors: ['var(--chart-sparkline-color)']
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
