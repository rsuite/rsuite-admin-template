import toThousands from './toThousands';

export default function formatValue(value: number) {
  if (value === null || typeof value === 'undefined') {
    return '--';
  } else if (value === 0) {
    return '0';
  } else if (0 < value && value < 1000) {
    return '< 1k';
  } else if (1000 <= value && value < 1000000) {
    return toThousands(value / 1000) + ' k';
  } else if (1000000 <= value && value < 1000000000) {
    return toThousands(value / 1000000) + ' M';
  } else if (1000000000 <= value && value < 1000000000000) {
    return toThousands(value / 1000000000) + ' B';
  } else if (1000000000000 <= value) {
    return 'INF.';
  }
}
