import React from "react";

import { Routing } from "pages";

import { withProviders } from "./providers";

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
