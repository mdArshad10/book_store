import React from "react";
import Banner from "./Banner";
import TopSeller from "./TopSeller";
import Recommened from "./Recommened";
import News from "./News";
import Meta from "../../components/Meta";

const HomePage = () => {
  return (
    <>
      <Meta />
      <Banner />
      <TopSeller />
      <Recommened />
      <News />
    </>
  );
};

export default HomePage;
