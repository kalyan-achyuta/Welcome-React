import React from "react";
import ReactDOM from "react-dom/client";

const Title =() => (
<h1 className="head">Kalyan is here 😎</h1>
);

const Heading =() => (
  <div>
    {Title()}
    <Title></Title>
    <Title />
    <h1 className="head">let's rock the react..🎆</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
