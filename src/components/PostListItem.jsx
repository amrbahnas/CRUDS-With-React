import { memo} from "react";
import {  Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editToggle, editItem } from "../store/postSlice.js";
const PostListItem = ({ data, deleteItem }) => {
 const dispatch = useDispatch()

  const deleteHandler =(el)=>{
    if(window.confirm(`Are you sure you want to delete : ${el.title}`)){
       deleteItem(el.id)
    }
  }
 
  const editHandler =(el)=>{
    dispatch(editToggle())
    dispatch(editItem(el))
  
  }

  const tableRow = data.map((el, indx) => {
    return (
      <tr key={el.id}>
        <td>#{++indx}</td>
        <td>{el.title}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success" onClick={() => editHandler(el)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteHandler(el)}>
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return <>{tableRow}</>;
};

export default memo(PostListItem);
