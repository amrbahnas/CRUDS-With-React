import React from "react";
import PostListItem from "./PostListItem";
import { Table } from "react-bootstrap";

const postList = ({ data, loading, error, deleteItem }) => {
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading</p>
      ) : error ? (
        <p className="text-center">Field</p>
      ) : data.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "70%" }}>Title</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            <PostListItem
              data={data}
              loading={loading}
              error={error}
              deleteItem={deleteItem}
            />
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No Items</p>
      )}
    </div>
  );
};

export default postList;
