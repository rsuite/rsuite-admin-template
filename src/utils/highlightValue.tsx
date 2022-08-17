import React from 'react';
import toThousands from './toThousands';

const Highlight = ({ value, unit }: { value: string; unit: string }) => (
  <span>
    <span className="highlight">{value}</span> {unit}{' '}
  </span>
);

export default function highlightValue(value, fixed) {
  if (value === null || typeof value === 'undefined') {
    return '--';
  } else if (value === 0) {
    return '0';
  } else if (0 < value && value < 1000) {
    return '< 1k';
  } else if (1000 <= value && value < 1000000) {
    return <Highlight value={toThousands(value / 1000, fixed)} unit="k" />;
  } else if (1000000 <= value && value < 1000000000) {
    return <Highlight value={toThousands(value / 1000000, fixed)} unit="M" />;
  } else if (1000000000 <= value) {
    return <Highlight value={toThousands(value / 1000000000, fixed)} unit="B" />;
  }
}
