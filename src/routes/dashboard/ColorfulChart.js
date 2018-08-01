import React from 'react';
import classNames from 'classnames';
import Chartist from 'react-chartist';
import { formatValue } from '../../utils';

const ColorfulChart = ({ className, title, data, type, options }) => (
  <div className={classNames('colorful-chart', className)}>
    <h3>{title}</h3>
    <Chartist
      data={data}
      type={type}
      options={{
        axisX: {
          showLabel: false,
          showGrid: false
        },
        axisY: {
          offset: 50,
          labelInterpolationFnc: function(value) {
            return formatValue(value);
          }
        },
        ...options
      }}
    />
  </div>
);

export default ColorfulChart;
