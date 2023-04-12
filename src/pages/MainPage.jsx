import React from "react";
import Carousell from "../components/Carousell";
import Filter from "../components/Filter";
import Kind from "../components/Kind";

import MediaCard from "../components/MediaCard";
import Pagination1 from "../components/Pagination";

const MainPage = () => {
  return (
    <>
      <div>
        <Carousell />
      </div>
      <div className="kind container">
        <Kind />
      </div>
      <div className="main-page">
        <div className="sidebar">
          <Filter />
        </div>

        <div className="cards ">
          <MediaCard />
        </div>
      </div>

      <div className="pagination">
        <Pagination1 />
      </div>
    </>
  );
};

export default MainPage;
