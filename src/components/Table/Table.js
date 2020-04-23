import React from "react";
import { Table } from "semantic-ui-react";
import "./Table.scss";

const TableData = (props) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{props.header_1}</Table.HeaderCell>
          <Table.HeaderCell>{props.header_2}</Table.HeaderCell>
          <Table.HeaderCell>{props.header_3}</Table.HeaderCell>
          <Table.HeaderCell>{props.header_4}</Table.HeaderCell>
          <Table.HeaderCell>{props.header_5}</Table.HeaderCell>
          <Table.HeaderCell>{props.header_6}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell >Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TableData;
