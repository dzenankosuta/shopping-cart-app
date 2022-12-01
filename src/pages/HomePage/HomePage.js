import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <img
        src={require("../../images/homepage.webp")}
        alt="Home Page BackGround"
        className="w-full h-full relative -top-6"
      />
      <h1 className="m-auto w-5/6 text-5xl font-bold  text-center text-slate-800 mt-4 border-2 border-dashed border-orange-300 rounded-xl">
        Welcome to our shopping cart application
      </h1>
      <p className="text-2xl font-bold  text-center text-slate-700 my-8">
        Please
        <Link
          to="items"
          className="text-3xl p-1 bg-orange-100 rounded-md text-cyan-700"
          onClick={() => window.scrollTo(0, 0)}
        >
          click me
        </Link>
        to see our products
      </p>
    </>
  );
};

export default HomePage;
