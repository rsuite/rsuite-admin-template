import React from 'react';
import Chartist from 'react-chartist';

interface SimplePieChartProps {
  title: string;
  data: any;
  type: string;
  options?: any;
}

const SimplePieChart = ({ title, data, type, options }: SimplePieChartProps) => (
  <div className="simple-chart">
    <h3>{title}</h3>
    <Chartist
      data={data}
      type={type}
      options={{
        height: 300,
        ...options
      }}
    />
  </div>
);

export default SimplePieChart;
