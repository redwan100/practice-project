import { useReducer } from "react";
import { useUser } from "../../Context/UserProvider";

const Form = () => {
 
  const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    select: "",
    date: "",
    number: 0,
    term: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TOGGLE":
        return {
          ...state,
          term: !state.term,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(state);
  };

  return (
    <div className="w-full min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-md sm:max-w-screen-sm mx-auto space-y-3 border border-gray-200 shadow-md  p-4 rounded-md"
      >
        <span>{state.select}</span>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-accent input-bordered w-full"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            className="input input-accent input-bordered w-full"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            placeholder="Password"
            className="input input-accent input-bordered w-full"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="form-control">
          <select
            className="select select-accent w-full max-w-xs"
            name="select"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          >
            <option disabled selected>
              Dark mode or light mode?
            </option>
            <option value={"one"}>one</option>
            <option value={"two"}>two</option>
            <option value={"three"}>three</option>
          </select>
        </div>
        <div className="form-control">
          <div className="flex gap-3">
            <div className="flex gap-1">
              <label htmlFor="male">male</label>
              <input
                type="radio"
                name="gender"
                className="radio radio-accent"
                value={"male"}
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="flex gap-1">
              <label htmlFor="female">female</label>
              <input
                type="radio"
                name="gender"
                value={"female"}
                className="radio radio-accent"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            name="date"
            type="date"
            className="input input-accent input-bordered w-full"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            name="number"
            type="number"
            className="input input-accent input-bordered w-full"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              className="checkbox checkbox-accent"
              name="term"
              onChange={() =>
                dispatch({
                  type: "TOGGLE",
                })
              }
            />
          </label>
        </div>
        <div className="form-control">
          <button
            disabled={state.term}
            type="submit"
            className="btn btn-accent"
          >
            Submit
          </button>
        </div>
      </form>

      <hr />
     
    </div>
  );
};

export default Form;
