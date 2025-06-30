import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/App";
import store from "./app/store/store.ts";

import "./index.css";

import { version } from "../package.json";

document.title = `${document.title} - ${version}`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
