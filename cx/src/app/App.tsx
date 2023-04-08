import { createRoot } from "react-dom/client";

export const App = () => {
  return <div style={{ color: "blue" }}>Hello!</div>;
};

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Failed to find root element.");
}
