import {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  editToggle,
  updatePost,
} from "../store/postSlice.js";
const Edit = () => {
  const dispatch = useDispatch();

  const { editpost } = useSelector((state) => state.posts);
  const [title,setTitle] =useState(editpost.title)
  const [description, setDescription] = useState(editpost.description);
  
  const editHandler = (e) =>{
    e.preventDefault();
    dispatch(editToggle());
    dispatch(updatePost({id:editpost.id,title,description}));
  }

  return (
    <div className="popup">
      <div className="formScreen">
        <Form
          onSubmit={(e) =>
            editHandler(e, { id: editpost.id, title, description })
          }
        >
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
            Edit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Edit
