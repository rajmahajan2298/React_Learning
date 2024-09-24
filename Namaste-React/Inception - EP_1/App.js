// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");

// const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading);

// Nested React Elements

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm an H1 Tag")));

// If we have multiple Sibling or Child Elements we need to Use Array or List.

