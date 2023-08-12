import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen grid place-content-center fixed top-0 left-0">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;
