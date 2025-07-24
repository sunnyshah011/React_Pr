import { createRoot } from "react-dom/client";
import App from "./App";
import Context from "./Context";

createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
