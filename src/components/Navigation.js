import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation" >
            <Link className="navLink" to="/" >Home </Link>
            <Link className="navLink" to="community" >Community </Link>
            <Link className="navLink" to="profile" >{"Login" || "Profile"}</Link> {/*It should show login if the user isn't logged in and profile if they are */}
        </div>
    );
};

export default Navigation;