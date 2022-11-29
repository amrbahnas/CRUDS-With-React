import React from "react";
import Post from "./Post";
import { Table } from "react-bootstrap";

const postList = ({ data, loading, error }) => {
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading</p>
      ) : error ? (
        <p className="text-center">Field</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "70%" }}>Title</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            <Post data={data} loading={loading} error={error} />
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default postList;
