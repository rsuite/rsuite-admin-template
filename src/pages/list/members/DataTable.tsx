import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Table,
  Panel,
  ButtonToolbar,
  Button,
  DOMHelper,
  Progress,
  Checkbox
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, CheckCell, ActionCell } from './Cells';

const data = mockUsers(20);

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const DataTable = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (_value, checked) => {
    const keys = checked ? data.map(item => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value, checked) => {
    const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
    setCheckedKeys(keys);
  };

  return (
    <>
      <Panel header={<h3>Members</h3>}>
        <div className="table-toolbar">
          <ButtonToolbar className="inner-left">
            <Button appearance="primary" onClick={() => setShowDrawer(true)}>
              Add Member
            </Button>
          </ButtonToolbar>

          <div className="inner-right">
            <InputGroup inside>
              <Input placeholder="Search" />
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
            </InputGroup>
          </div>
        </div>

        <Table height={Math.max(getHeight(window) - 216, 400)} data={data}>
          <Column width={70} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={50} align="center">
            <HeaderCell style={{ padding: 0 }}>
              <div style={{ lineHeight: '40px' }}>
                <Checkbox
                  inline
                  checked={checked}
                  indeterminate={indeterminate}
                  onChange={handleCheckAll}
                />
              </div>
            </HeaderCell>
            <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
          </Column>
          <Column width={80} align="center">
            <HeaderCell>Avatar</HeaderCell>
            <ImageCell dataKey="avatar" />
          </Column>

          <Column minWidth={160} flexGrow={1}>
            <HeaderCell>Name</HeaderCell>
            <NameCell dataKey="name" />
          </Column>

          <Column width={230}>
            <HeaderCell>Skill Proficiency</HeaderCell>
            <Cell style={{ padding: '10px 0' }}>
              {rowData => <Progress percent={rowData.progress} showInfo={false} />}
            </Cell>
          </Column>

          <Column width={100}>
            <HeaderCell>Rating</HeaderCell>
            <Cell>
              {rowData =>
                Array.from({ length: rowData.rating }).map((_, i) => <span key={i}>⭐️</span>)
              }
            </Cell>
          </Column>

          <Column width={100}>
            <HeaderCell>Income</HeaderCell>
            <Cell>{rowData => `$${rowData.amount}`}</Cell>
          </Column>

          <Column width={300}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>

          <Column width={120}>
            <HeaderCell>
              <MoreIcon />
            </HeaderCell>
            <ActionCell dataKey="id" />
          </Column>
        </Table>
      </Panel>
      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default DataTable;
