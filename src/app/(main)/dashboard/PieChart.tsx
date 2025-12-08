'use client';

import Chart, { Props as ChartProps } from 'react-apexcharts';
import { Panel } from 'rsuite';

interface PieChartProps {
  title: string;
  data: ChartProps['series'];
  type?: ChartProps['type'];
  options?: ChartProps['options'];
  labels?: string[];
}

const defaultOptions = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%'
      },
      offsetY: 0
    },
    stroke: {
      colors: undefined
    }
  },
  colors: [
    'var(--chart-pie-series-1)',
    'var(--chart-pie-series-2)',
    'var(--chart-pie-series-3)',
    'var(--chart-pie-series-4)',
    'var(--chart-pie-series-5)'
  ],
  legend: {
    position: 'bottom',
    offsetY: 0
  }
};

const PieChart = ({ title, data, type, labels, options }: PieChartProps) => (
  <Panel className="card" style={{ height: 380 }} bodyFill header={title}>
    <Chart
      series={data}
      type={type}
      height={340}
      options={Object.assign({}, defaultOptions, options, { labels })}
    ></Chart>
  </Panel>
);

export default PieChart;
