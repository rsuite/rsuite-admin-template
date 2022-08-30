import React from 'react';
import { DOMHelper, Table } from 'rsuite';
import { mockUsers } from '@/data/mock';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const data = mockUsers(1000);

const VirtualizedTable = () => {
  return (
    <Table
      virtualized
      height={Math.max(getHeight(window) - 120, 400)}
      data={data}
      translate3d={false}
    >
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={200}>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column minWidth={200} flexGrow={1}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  );
};

export default VirtualizedTable;
