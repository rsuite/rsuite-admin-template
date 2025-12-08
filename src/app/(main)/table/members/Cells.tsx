import { Popover, Whisper, Checkbox, Menu, IconButton, Table, CellProps } from 'rsuite';
import { FiMoreVertical } from 'react-icons/fi';

const { Cell } = Table;

export const NameCell = ({ rowData, dataKey, ...props }: CellProps<any>) => {
  const speaker = (
    <Popover title="Description">
      <p>
        <b>Name:</b> {rowData.name}
      </p>
      <p>
        <b>Gender:</b> {rowData.gender}
      </p>
      <p>
        <b>City:</b> {rowData.city}
      </p>
      <p>
        <b>Street:</b> {rowData.street}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{dataKey ? rowData[dataKey] : null}</a>
      </Whisper>
    </Cell>
  );
};

export const ImageCell = ({ rowData, dataKey, ...props }: CellProps<any>) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: '#f5f5f5',
        borderRadius: 6,
        marginTop: 2,
        overflow: 'hidden',
        display: 'inline-block'
      }}
    >
      <img src={rowData[dataKey!]} width="40" />
    </div>
  </Cell>
);

export const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: Omit<CellProps<any>, 'onChange'> & {
  checkedKeys: number[];
  onChange: (value: any, checked: boolean) => void;
}) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey!]}
        inline
        onChange={(value, checked) => onChange(value, checked)}
        checked={checkedKeys.some(item => item === rowData[dataKey!])}
      />
    </div>
  </Cell>
);

const renderMenu = ({ onClose, left, top, className }: any, ref: any) => {
  const handleSelect = (eventKey?: string | number) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Menu onSelect={handleSelect}>
        <Menu.Item eventKey={1}>Follow</Menu.Item>
        <Menu.Item eventKey={2}>Sponsor</Menu.Item>
        <Menu.Item eventKey={3}>Add to friends</Menu.Item>
        <Menu.Item eventKey={4}>View Profile</Menu.Item>
        <Menu.Item eventKey={5}>Block</Menu.Item>
      </Menu>
    </Popover>
  );
};

export const ActionCell = (props: any) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper placement="autoVerticalEnd" trigger="click" speaker={renderMenu}>
        <IconButton appearance="subtle" icon={<FiMoreVertical />} />
      </Whisper>
    </Cell>
  );
};
