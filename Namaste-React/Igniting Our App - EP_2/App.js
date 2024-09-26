import React from "react";
import ReactDOM  from "react-dom";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm an H1 Tag")));


const root = ReactDOM.createRoot(document.getElementById("parent"));        
root.render(parent);



// Parcel is an type of Bundler.
// Bundler what it will do is packages our app, so that it can be shifted to Production.
// Parcel have Two Dependency.
   // (i) Dev Dependency which is used in Dev Environment.
   // (ii) Normal Dependency which is used in Prod Environment.