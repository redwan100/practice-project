import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
const PostView = () => {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : posts.map((post) => <p>{post.title}</p>)}

      {error || null}
    </div>
  );
};

export default PostView;
