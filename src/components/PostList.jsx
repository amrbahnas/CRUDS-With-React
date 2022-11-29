import React from 'react'
import {
  Table,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const postList = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>this is title 1</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default postList