import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./app/layout";

export default function App() {
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_COMPANY_NAME}</title>
        <meta name="description" content={import.meta.env.VITE_COMPANY_NAME} />
      </Helmet>
      <Router>
        <Layout />
      </Router>
    </>
  );
}
