import { removeClass } from 'dom-lib';

const filter = [
  /**
   * 自定义异步预加载
   */
  new Promise((resolve, reject) => {
    resolve();
  })
];

export default function ready(callback) {
  Promise.all(filter).then(values => {
    callback(values);
    removeClass(document.getElementById('body'), 'body-loading');
  });
}
