import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div
        id="banner"
        className="p-5 d-flex flex-column align-items-center justify-content-center"
      >
        <h1 className="mt-4 mb-2 text-white fw-bold text-center">
          Sewa Mobil di Sidoarjo Sekarang
        </h1>
        <p className="text-white text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="search">
          <button className="btn-rent-car mb-4 text-decoration-none">
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
