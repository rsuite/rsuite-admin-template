import React from 'react';
import { Input } from 'rsuite';

const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

export default Textarea;
