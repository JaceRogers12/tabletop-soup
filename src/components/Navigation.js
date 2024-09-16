import React from "react";
// import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div > {/*The divs below need to be replaced with Links. */}
            <div >Home </div>
            <div >Community </div>
            <div >{"Login" || "Profile"}</div> {/*It should show login if the user isn't logged in and profile if they are */}
        </div>
    );
};

export default Navigation;