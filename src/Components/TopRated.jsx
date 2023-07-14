import { useUser } from "../Context/UserProvider";
import { ADD_TO_CART } from "../States/actionTypes";

const TopRated = () => {
  const {
    state: { users, cart },
    dispatch,
  } = useUser();
  console.log(cart);

  return (
    <div>
      {users.map((user) => (
        <p
          onClick={() =>
            dispatch({
              type: ADD_TO_CART,
              payload: user.name,
            })
          }
        >
          {user.email}
        </p>
      ))}

      <hr />
      <h1>Name</h1>
      {cart.length === 0 ? (
        <p>No name here..</p>
      ) : (
        cart.map((user) => <p>{user}</p>)
      )}
    </div>
  );
};

export default TopRated;
