// @flow

import * as React from 'react';
import _ from 'lodash';
import { DOMHelper } from 'rsuite';
import Chart from './Chart';

const { addStyle, getWidth, getHeight, on } = DOMHelper;

type Data = {
  pv: number,
  uv: number,
  vv: number
};

type Props = {
  data: Data
};
type State = {
  data: Object,
  // chart 直接的间隔距离
  gapWidth: number,
  // chart 最大高度， 不包括 pv vv uv 那三张图片
  maxHeight: number
};

const SIZE = 3000;

class ChartView extends React.Component<Props, State> {
  chart = null;
  resizeListener = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      gapWidth: 0,
      maxHeight: 0,
      data: props.data
    };
  }
  componentDidMount() {
    this.updatePosition();
    this.resizeListener = on(window, 'resize', _.debounce(this.updatePosition, 200));
  }
  componentWillMount() {
    const { data } = this.props;

    const vv = data.vv;
    const uv = data.uv;
    let q = 0.1;
    let timer = setInterval(() => {
      q += 0.05;
      if (q >= 1) {
        q = 1;
        clearInterval(timer);
      }
      data.vv = vv * q;
      data.uv = uv * q;
      this.chart && this.setState({ data });
    }, 100);
  }
  componentWillUnmount() {
    if (this.resizeListener) {
      this.resizeListener.off();
    }
  }

  bindChartRef = (ref: React.ElementRef<*>) => {
    this.chart = ref;
  };
  updatePosition = () => {
    // 300 = sidebar 260 +  body padding 40
    const gapWidth = (getWidth(window) - 300) / 4;
    // 400: margin top + bottom
    const maxHeight = getHeight(window) - 400;

    this.setState({
      gapWidth,
      maxHeight
    });
  };
  render() {
    const { data, gapWidth, maxHeight } = this.state;
    return (
      <div className="flow-chart" ref={this.bindChartRef}>
        <Chart gapWidth={gapWidth} maxHeight={maxHeight} data={data} />
      </div>
    );
  }
}

export default ChartView;
