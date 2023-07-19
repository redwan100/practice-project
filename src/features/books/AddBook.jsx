import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BookSlice";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const numOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: numOfBooks + 1,
      title,
      author,
    };

    dispatch(addBook(book));

    console.log(book);
  };

  return (
    <div className="max-w-sm mx-auto my-5">
      <form action="" className="" onSubmit={handleAddBook}>
        <div>
          <label htmlFor="" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="input input-success w-full"
            value={title}
            placeholder="Title here"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="" className="block">
            Author
          </label>
          <input
            type="text"
            name="author"
            className="input input-success w-full"
            value={author}
            placeholder="author name"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-sm block mx-auto my-3 w-full" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
