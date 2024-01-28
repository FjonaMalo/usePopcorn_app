import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/starsRating/StarRating";
import Test from "./components/starsRating/Test";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      color="#fcc419"
      size={48}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={0}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
