import React from "react";
import { SafeEnvironmentContainer } from "./safeEnvironment.style";
import { Container } from "@material-ui/core";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>Ambiente Seguro</Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
