import * as React from 'react';
import { Row, Col, Icon, Panel } from 'rsuite';

import * as images from '../../images/charts';
import ColorfulChart from './ColorfulChart';
import SimpleLineChart from './SimpleLineChart';
import SimplePieChart from './SimplePieChart';

const pvChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [[112332, 123221, 432334, 342334, 133432, 4564342, 3353544]]
};

const vvChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [[112332, 123221, 432534, 342334, 133432, 1064342, 953544]]
};

const uvChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [[112332, 123221, 432344, 342334, 133432, 564342, 353544]]
};

const barChartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  series: [
    [92332, 93221, 132344, 142334, 83432, 264342, 153544],
    [112332, 123221, 432344, 342334, 133432, 564342, 353544]
  ]
};

const pieChartData = {
  labels: ['Direct', 'Internal', 'Referrals', 'Search Engines'],
  series: [112332, 123221, 432334, 342334]
};

type Props = {};

class Dashboard extends React.Component<Props> {
  render() {
    return (
      <Panel className="dashboard" header={<h3>Dashboard</h3>}>
        <Row gutter={30} className="header">
          <Col xs={8}>
            <Panel className="trend-box">
              <img className="chart-img" src={images.pv} />
              <div className="title">Page Views </div>
              <div className="value">281,358</div>
            </Panel>
          </Col>
          <Col xs={8}>
            <Panel className="trend-box">
              <img className="chart-img" src={images.vv} />
              <div className="title">Visits </div>
              <div className="value">251,901</div>
            </Panel>
          </Col>
          <Col xs={8}>
            <Panel className="trend-box">
              <img className="chart-img" src={images.uv} />
              <div className="title">Unique Visitors</div>
              <div className="value">25,135</div>
            </Panel>
          </Col>
        </Row>

        <Row gutter={30}>
          <Col xs={8}>
            <ColorfulChart
              title="Page Views"
              className="ct-chart-magenta"
              data={pvChartData}
              type="Line"
            />
          </Col>
          <Col xs={8}>
            <ColorfulChart
              title="Visits"
              className="ct-chart-orange"
              data={vvChartData}
              type="Line"
            />
          </Col>
          <Col xs={8}>
            <ColorfulChart
              title="Unique Visitors"
              className="ct-chart-azure"
              data={uvChartData}
              type="Bar"
            />
          </Col>
        </Row>

        <Row gutter={30}>
          <Col xs={16}>
            <SimpleLineChart title="Page Views Trends by Week" data={barChartData} type="Line" />
          </Col>
          <Col xs={8}>
            <SimplePieChart title="Traffic Sources" data={pieChartData} type="Pie" />
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default Dashboard;
