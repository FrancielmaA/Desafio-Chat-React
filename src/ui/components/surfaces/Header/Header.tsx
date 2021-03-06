import { Container, Toolbar } from "@material-ui/core";
import React from "react";
import { HeaderAppBar } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}></Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
