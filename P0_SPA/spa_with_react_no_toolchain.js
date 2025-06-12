import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"

window.onload = () => {

    const root = ReactDOMClient.createRoot(document.getElementById("root"));

    const ints = [1, 2, 3];

    const childElements = []

    childElements.push(
        React.createElement("li", {key:ints[0]}, ints[0])
    )
    childElements.push(
        React.createElement("li", {key:ints[1]}, ints[1])
    )
    childElements.push(
        React.createElement("li", {key:ints[2]}, ints[2])
    )

    root.render(childElements)
};