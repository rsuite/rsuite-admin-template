import React from 'react';
import { Table, Panel } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: 1,
    url: 'https://rsuitejs.com',
    visits: '105,253',
    unique: '23,361',
    bounce: '11%'
  },
  {
    id: 2,
    url: 'https://rsuitejs.com/components/overview/',
    visits: '103,643',
    unique: '23,385',
    bounce: '17%'
  },
  {
    id: 3,
    url: 'https://rsuitejs.com/components/table/',
    visits: '140,013',
    unique: '41,256',
    bounce: '13%'
  },
  {
    id: 4,
    url: 'https://rsuitejs.com/components/drawer/',
    visits: '194,532',
    unique: '19,038',
    bounce: '18%'
  },
  {
    id: 5,
    url: 'https://rsuitejs.com/guide/usage/',
    visits: '26,353',
    unique: '1,000',
    bounce: '20%'
  },
  {
    id: 6,
    url: 'https://rsuitejs.com/guide/customization/',
    visits: '11,973',
    unique: '4,786',
    bounce: '24%'
  }
];

const DataTable = () => {
  return (
    <Panel className="card" header="Most Visited Pages">
      <Table height={300} data={data} rowKey="id">
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>PAGE NAME </HeaderCell>
          <Cell>
            {rowData => {
              return (
                <a href={rowData.url} target="_blank" rel="noreferrer">
                  {rowData.url}
                </a>
              );
            }}
          </Cell>
        </Column>

        <Column width={130}>
          <HeaderCell>VISITORS</HeaderCell>
          <Cell dataKey="visits" />
        </Column>

        <Column width={100}>
          <HeaderCell>UNIQUE</HeaderCell>
          <Cell dataKey="unique" />
        </Column>

        <Column width={130}>
          <HeaderCell>BOUNCE RATE</HeaderCell>
          <Cell dataKey="bounce" />
        </Column>
      </Table>
    </Panel>
  );
};

export default DataTable;
