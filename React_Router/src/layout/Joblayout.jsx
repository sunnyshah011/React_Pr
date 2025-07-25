import React from "react";
import Jobs from "../Page/Jobs";
import { Outlet } from "react-router-dom";

const Joblayout = () => {
  return (
    <div>
      <h2>available jobs</h2>
      apply for jobs now
      <Outlet />
    </div>
  );
};

export default Joblayout;