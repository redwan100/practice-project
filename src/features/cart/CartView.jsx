import React from "react";
import { useSelector } from "react-redux";

const CartView = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  return (
    <>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, i) => (
                <tr className="bg-base-200" key={item.id}>
                  <th>{i + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td className=" space-x-4">
                    <button className="btn btn-error btn-xs">Delete</button>
                    <button className="btn btn-success btn-xs">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-3xl font-semibold">
          No cart items available
        </p>
      )}
    </>
  );
};

export default CartView;
