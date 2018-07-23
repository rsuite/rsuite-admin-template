export default function toThousands(value, fixed = 0) {
  return (value.toFixed(fixed) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
