import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch, postDelete } from "./PostSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/CartSlice";
import Loading from "../../components/Loading";

const PostView = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(postDelete(id));
    dispatch(dataFetch());
  };

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center my-3">All Posts:{posts.length}</h1>
      <div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading ? (
            <Loading />
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-slate-50 rounded-md p-2 shadow-sm border border-slate-200 text-center"
              >
                <p className="text-xl mb-3">{post.name}</p>

                <div>
                  <img src={post.img} alt="" />
                </div>

                <div className="mx-auto block w-max">
                  <button
                    className="btn btn-xs btn-accent m-1"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                  <Link>
                    <button className="btn btn-xs btn-accent m-1">Edit</button>
                  </Link>
                  <Link to={`/postDetail/${post._id}`}>
                    <button className="btn btn-xs btn-accent m-1">
                      Details
                    </button>
                  </Link>

                  <button
                    className="btn btn-xs btn-primary m-1"
                    onClick={() => addCart(post)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {error || null}
      </div>
    </div>
  );
};

export default PostView;

