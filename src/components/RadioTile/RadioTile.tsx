import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Stack } from 'rsuite';
import CheckIcon from '@rsuite/icons/Check';

interface RadioTileProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  title?: React.ReactNode;
  name?: string;
  className?: string;
  value: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioTile = (props: RadioTileProps) => {
  const { icon, children, value, title, name, className, onChange, ...rest } = props;

  const checked = value === name;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value, event);
    },
    [onChange]
  );

  const classes = classNames(className, 'rs-radio-tile', { checked });

  return (
    <Stack className={classes} {...rest} as="label" spacing={6}>
      {icon}
      <div>
        <input type="radio" value={name} checked={checked} onChange={handleChange} />
        <div className="rs-radio-tile-title">{title}</div>
        <div className="rs-radio-tile-content text-muted">{children}</div>
        <div className="rs-radio-tile-check">
          <CheckIcon />
        </div>
      </div>
    </Stack>
  );
};

export default RadioTile;
