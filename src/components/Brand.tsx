import React from 'react';
import { Link } from 'react-router-dom';
import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';

const Brand = props => {
  return (
    <div className="brand" {...props}>
      <Link to="/">
        <AdvancedAnalyticsIcon style={{ fontSize: 22 }} />
        <span style={{ marginLeft: 16 }}>Admin Template</span>
      </Link>
    </div>
  );
};

export default Brand;
