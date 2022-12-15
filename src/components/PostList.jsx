import React from "react";
import PostListItem from "./PostListItem";
import { Table } from "react-bootstrap";
import { motion} from "framer-motion";

const postList = ({ data, loading, error, deleteItem }) => {
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading</p>
      ) : error ? (
        <p className="text-center">Field</p>
      ) : data.length ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:0.5 }}
        >
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
        </motion.div>
      ) : (
        <p className="text-center">No Items</p>
      )}
    </div>
  );
};

export default postList;
