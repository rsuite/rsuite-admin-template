export default function toThousands(value: number, fixed = 0) {
  return (value.toFixed(fixed) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
