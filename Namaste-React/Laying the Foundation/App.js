// import React from "react";
// import ReactDOM  from "react-dom";

// React.createElement

// const heading = React.createElement("h1", { id: "heading"}, "Namste from React Element");


// JSX Element

// const jsxHeading = <h1 className="heading">Namaste React From JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React Functional Component

// const HeadingComponent = () => {
//     return <h1>Namaste React From Functional Component</h1>
// }

// root.render(<HeadingComponent />);

// React Component Composition

// Composing Component inside a Component is known as Compoment Composing.
// Nesting Component inside a Component

// import React from "react";
// import ReactDOM  from "react-dom";

// const Title = () => (
//     <h1 className="head" tabIndex="1">
//         Namaste React From JSX
//     </h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">
//             Namaste React From Functional Component
//         </h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// React Element into Component

import React from "react";
import ReactDOM  from "react-dom";

const title = (
    <h1 className="head" tabIndex="1">
        Namaste React From JSX
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">
            Namaste React From Functional Component
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
