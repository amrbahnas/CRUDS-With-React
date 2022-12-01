import { useEffect,useCallback } from "react";
import PostList from "../components/PostList";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { fetchposts, deletePost } from "../store/postSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.postSlice);

  // deletePost
  const deleteItem = useCallback((id)=>{
    dispatch(deletePost(id));
  },[dispatch]);
 // fetch posts
  useEffect(() => {
    dispatch(fetchposts());
  }, [dispatch]);

  return (
    <PostList
      data={records}
      loading={loading}
      error={error}
      deleteItem={deleteItem}
    />
  );
};

export default Index;
