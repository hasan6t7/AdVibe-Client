import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


const Root = () => {
  return (
    <div className="poppins">
      <Navbar></Navbar>
      <main className="max-w-[1200px] mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
