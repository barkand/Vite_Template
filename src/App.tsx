import { HashRouter as Router } from "react-router-dom";

import { HTMLHeader } from "./template/components";
import Layout from "./app/layout";

export default function App() {
  return (
    <HTMLHeader>
      <Router>
        <Layout />
      </Router>
    </HTMLHeader>
  );
}
