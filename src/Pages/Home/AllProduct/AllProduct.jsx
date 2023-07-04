import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [loading, setLoading] = useState(true);
  const [itemPerPage, setItemPerPage] = useState(2);
  const [sort, setSort] = useState("ascending");
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const totalPage = Math.ceil(totalProduct / itemPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const pageNumber = [...Array(totalPage).keys()];
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/all-product?total=${currentPage}&limit=${itemPerPage}&sort=${sort}`
      )
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios.get("http://localhost:5000/total-products/").then((res) => {
      setTotalProduct(res.data.total);
      setLoading(false);
    });
  }, [itemPerPage, currentPage, sort]);

  if (loading) return <p>Loading..</p>;
  const options = [2, 3, 4];

  const handlePageNumber = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

 const handleSearch = () => {
   setSearchText(inputRef.current.value)
 }

 console.log(searchText);
  return (
    <div className="m-8">
      <div>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          className="input input-success"
          onChange={handleSearch}
        />
      </div>
      <div className="flex items-center my-4">
        <p>sort by</p>
        <select onChange={handleSort}>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-3 container mx-auto w-[80%]">
        {product.map((item) => (
          <div key={item._id} className="border py-3 px-6">
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>

      <div>
        {pageNumber.map((number, i) => (
          <button
            className={`bg-slate-400 px-2 text-white m-2 rounded-md ${
              currentPage === number && "bg-yellow-300"
            }`}
            key={i + 1}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select value={itemPerPage} onChange={handlePageNumber}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllProduct;
