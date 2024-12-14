import React from "react";
import Summary from "./Summary.js";
import FindUs from "./FindUs.js";
import Updates from "./Updates.js";

function Content() {
    return (
        <div className="content">
            <Summary />
            <FindUs />
            <Updates />
        </div>
    );
};

export default Content;