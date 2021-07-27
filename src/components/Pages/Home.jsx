import React from "react";
import Header from "../Common/Header";
import createGroup from "../../images/create-group.jpg";
import joinGroup from "../../images/join-group.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={createGroup} alt="create-a-group"></img>
      </div>
      <div>
        <img src={joinGroup} alt="join-a-group"></img>
      </div>
    </div>
  );
};

export default Home;
