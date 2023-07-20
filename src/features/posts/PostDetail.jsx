import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postDetail } from "./PostSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(postDetail(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="bg-slate-500 text-gray-50 max-w-screen-sm mx-auto m-8 p-4 rounded-md shadow-sm">
          <h1 className="text-2xl font-bold ">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default PostDetail;
