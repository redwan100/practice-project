import React from "react";
import { useUser } from "../Context/UserProvider";

const About = () => {
  const {
    state: { users, loading, error },
  } = useUser();

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        users.map((item) => <p key={item.id}>{item.name}</p>)
      )}
      {error || null}
    </div>
  );
};

export default About;
