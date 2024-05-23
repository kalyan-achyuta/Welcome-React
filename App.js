import React from "react";
import ReactDOM from "react-dom/client";

/*
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "i am h1 tag")
        )
    );
*/

/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
]);
*/

const heading = React.createElement("h1", { id: "heading" }, "hello kalyan!!🎶");
// In the above line we are creating an object by using createElement while rendering into the DOM it will convert 
// into HTML element like in the below line...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
