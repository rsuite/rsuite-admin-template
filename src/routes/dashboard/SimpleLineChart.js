import React from 'react';
import Chartist from 'react-chartist';
import { formatValue } from '../../utils';

const SimpleLineChart = ({ className, title, data, type, options }) => (
  <div className="simple-chart">
    <h3>{title}</h3>
    <Chartist
      data={data}
      type={type}
      options={{
        height: 300,
        axisX: {
          showGrid: false
        },
        axisY: {
          offset: 50,
          scaleMinSpace: 30,
          labelInterpolationFnc: function(value) {
            return formatValue(value);
          }
        },
        ...options
      }}
    />
  </div>
);

export default SimpleLineChart;
