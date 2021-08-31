import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "pages/index";
import Chat from "pages/chat";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Chat} path="/chat" />
    </BrowserRouter>
  );
};
export default Routes;
