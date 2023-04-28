import React from "react";
import { createRoot } from "react-dom/client";

function MyApp() {
  const [count, setCount] = React.useState(0);
  return (
    <h1>
      Hello, world!!!
      <button onClick={() => setCount(count + 2)}>click me! {count}</button>
    </h1>
  );
}

function mount() {
  const body = document.body;
  const container = document.createElement("div");
  container.id = "vm-root";
  body.appendChild(container);
  const root = createRoot(container);
  root.render(<MyApp />);
}

mount();
