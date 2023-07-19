import { useSelector } from "react-redux";
const ShowBook = () => {
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <div>
      <h1>List of books:{books.length}</h1>
      {books ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, i) => (
                  <tr key={book.id}>
                    <th>{i + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td className="space-x-2">
                      <button className="btn btn-xs">Edit</button>
                      <button className="btn btn-xs">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No book list available</p>
      )}
    </div>
  );
};

export default ShowBook;
