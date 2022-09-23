import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="m-auto w-5/6 text-5xl font-bold  text-center text-slate-800 my-16 border-2 border-dashed border-orange-300 rounded-xl">
        Welcome to our shopping cart application
      </h1>
      <p className="text-2xl font-bold  text-center text-slate-700 my-8">
        Please
        <Link
          to="items"
          className="text-3xl p-1 bg-orange-100 rounded-md text-cyan-700"
        >
          click me
        </Link>
        to see our products
      </p>
    </>
  );
};

export default HomePage;
