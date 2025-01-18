import React from "react";
import Summary from "./home/Summary.js";
import FindUs from "./home/FindUs.js";
import Updates from "./home/Updates.js";

function Home() {
    return (
        <div className="home content">
            <Summary />
            <FindUs />
            <Updates />
        </div>
    );
};

export default Home;