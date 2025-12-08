'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { Props as ChartProps } from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Panel, Stack } from 'rsuite';

interface BarChartProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  data: ChartProps['series'];
  type?: ChartProps['type'];
  options?: ChartProps['options'];
  labels?: string[];
}

const defaultOptions = {
  chart: {
    fontFamily: 'inherit',
    parentHeightOffset: 0,
    toolbar: {
      show: false
    },
    animations: {
      enabled: false
    },
    stacked: true
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false
    },
    type: 'datetime'
  },
  yaxis: {
    labels: {
      padding: 4
    }
  },
  colors: ['var(--chart-bar-series-1)', 'var(--chart-bar-series-2)', 'var(--chart-bar-series-3)'],
  legend: {
    show: false
  }
};

const BarChart = ({ title, actions, data, type, labels, options }: BarChartProps) => (
  <Panel
    className="card"
    header={
      <Stack justifyContent="space-between">
        {title}
        {actions}
      </Stack>
    }
  >
    <Chart
      series={data}
      type={type}
      height={284}
      options={Object.assign({}, defaultOptions, options, { labels })}
    />
  </Panel>
);

export default BarChart;
