import React from 'react'; // imports react

function Greeting() { // creates a function component named Greeting
    return ( // returns the dialogue below onto the page
        <div>
            <h2>Hello from the Greeting Component!</h2>
            <p>This is your first custom component in React.</p>
        </div>
    );
};

// exports the Greeting component so it can be used in other files
export default Greeting;