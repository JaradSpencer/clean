import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

const outputs = import.meta.glob<Parameters<typeof Amplify.configure>[0]>(
  "../amplify_outputs.json",
  { eager: true, import: "default" }
)["../amplify_outputs.json"];

if (outputs) {
  Amplify.configure(outputs);
} else {
  console.warn(
    "Amplify outputs are missing. Run `npx ampx sandbox` to configure backend features."
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
