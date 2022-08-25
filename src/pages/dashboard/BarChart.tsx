import React from 'react';
import Chart from 'react-apexcharts';
import { Panel, Stack } from 'rsuite';

interface BarChartProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
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
  colors: ['#206bc4', '#79a6dc', '#bfe399'],
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
