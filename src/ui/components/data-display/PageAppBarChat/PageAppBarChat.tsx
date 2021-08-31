import { Button, Toolbar } from "@material-ui/core";
import React from "react";
import { PageChatAppBar, TitleChatBar } from "./PageAppBarChat.style";

const ChatAppBar: React.FC = () => {
  return (
    <PageChatAppBar position={"sticky"}>
      <Toolbar>
        <TitleChatBar variant={"h6"}>Usuário</TitleChatBar>
        <Button variant="contained" color="secondary">
          Desconectar
        </Button>
      </Toolbar>
    </PageChatAppBar>
  );
};

export default ChatAppBar;
