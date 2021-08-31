import SafeEnvironment from "ui/components/feedback/safeEnvironment/safeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { PageLoginContainer } from "ui/components/data-display/PageLogin/PageLogin.style";
import userInfo from "data/hooks/pages/userInfo.page";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const socket = io("http://dev.digitro.com/callcontrol");

export default function Home() {
  const {
    maxCalls,
    setMaxCalls,
    username,
    setUsername,
    erro,
    setErro,
    USER_CONNECT,
    USER_DISCONNECT,
    setUserConnect,
    setUserDisconnect,
  } = userInfo();

  useEffect(() => {
    socket.on("USER_CONNECT", (USER_CONNECT) => setUserConnect(USER_CONNECT));
  });

  const history = useHistory();

  return (
    <div>
      <SafeEnvironment />

      <PageTitle title={"Login Chat"} />

      <Container>
        <PageLoginContainer>
          <TextField
            label="Usuário"
            type="search"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            label="Máximo de Chamada"
            type="number"
            variant="outlined"
            value={maxCalls}
            onChange={(event) => setMaxCalls(event.target.value)}
          />
          <Button
            sx={{ width: "220px" }}
            variant={"contained"}
            color={"primary"}
            value={USER_CONNECT}
          >
            Conectar
          </Button>
        </PageLoginContainer>
      </Container>
    </div>
  );
}
