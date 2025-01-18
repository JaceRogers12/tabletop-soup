import React from "react";

function Updates () {
    // get updates from the server and make cards for them that appear in order of most recent.
    // get only the 3 most recent updates and load 3 more when a button is clicked or the page is scrolled or something.
    return (
        <div className="updates section">
            <h1>Updates</h1>
            <p>Here's an update!</p>
            <p>There's another update here.</p>
            <p>This one isn't an update.</p>
        </div>
    )
}

export default Updates;