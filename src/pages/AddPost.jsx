import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {insertPost} from "../store/postSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // posts length
  //input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // send post to server
  const insert = (e) => {
    e.preventDefault();
    console.log("sad")
    dispatch(
      insertPost({
        id: Math.floor(Math.random() * 1000),
        title,
        description,
      })
    ).unwrap().then(() => {
        navigate("/")
      }).catch((erro) => {
        navigate("/error")
      });
      // use unwrap when dispatch asyncThunk Action
  };

  return (
    <Form onSubmit={(e) => insert(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Tilte</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddPost;
