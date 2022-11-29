import { useEffect } from "react";
import PostList from "../components/PostList";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../store/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const {records,loading,error} = useSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(fetchposts());
  }, [dispatch]);
  return <PostList data ={records} loading={loading} error={error}/>;
};

export default Posts;
