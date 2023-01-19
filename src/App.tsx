import { HashRouter as Router } from "react-router-dom";

import Layout from "./app/layout";

export default function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}
