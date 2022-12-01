import { memo} from "react";
import {  Button, ButtonGroup } from "react-bootstrap";
const PostListItem = ({ data, deleteItem }) => {

  const deleteHandler =(el)=>{
    if(window.confirm(`Are you sure you want to delete : ${el.title}`)){
       deleteItem(el.id)
    }
  }


  const tableRow = data.map((el, indx) => {
    return (
      <tr key={el.id}>
        <td>#{++indx}</td>
        <td>{el.title}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success">Edit</Button>
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
