import {  Button, ButtonGroup } from "react-bootstrap";

const Post = ({ data, loading, error }) => {
     const tableRow = data.map((el, indx) => {
       return (
         <tr key={el.id}>
           <td>#{++indx}</td>
           <td>{el.title}</td>
           <td>
             <ButtonGroup aria-label="Basic example">
               <Button variant="success">Edit</Button>
               <Button variant="danger">Delete</Button>
             </ButtonGroup>
           </td>
         </tr>
       );
     });
  return <>{tableRow}</>;
}

export default Post
