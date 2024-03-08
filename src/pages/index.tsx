import React, { ReactElement } from "react";
import Layout from "./components/Layout/Layout";

const Index = () => {
  return <div>hihi</div>;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Index;
