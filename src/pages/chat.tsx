import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import ChatAppBar from "ui/components/data-display/PageAppBarChat/PageAppBarChat";
import {
  PageChatGrid,
  InfoMsnGrip,
  SessionMsnGrip,
  SessionMsnPaper,
} from "ui/components/data-display/PageChat/PageChat.style";
import InfoChat from "ui/components/data-display/InfoChat/InfoChat";
import { Button, Grid } from "@material-ui/core";
import callInfo from "data/hooks/pages/callInfo.page";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Chat() {
  //var sel = 0;
  const { callId, media, startDate, service, caller } = callInfo();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <ChatAppBar />
      <PageChatGrid container spacing={1}>
        <InfoMsnGrip item xs={4}>
          <List>
            <PageTitle title={"Atendimentos"} />
          </List>
          <Divider />
          {/* 
          { (newCall.length>0?)(
            <List component="nav" aria-label="main mailbox folders">
            {newCall.map((item, index) =>{
              return(
                  <ListItem
                    button
                    selected={selectedIndex === sel++}
                    onClick={(event) => handleListItemClick(event, sel++)}
                    key="RemySharp"
                  >
                    <InfoChat
                      key={index}
                      caller={item.caller}
                      picture={item.caller}
                      service={item.service}
                      // date={}
                    />
                  </ListItem>
                );
              })}
            </List> 
          ): (
              <Typography align={'center'} color={'textPrimary'}>
                            Ainda não temos nenhuma nova chamada.
              </Typography>
          ))}
          */}

          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              key="RemySharp"
            >
              <InfoChat
                caller={"João"}
                picture={"caller"}
                service={"Relaizar Matricula"}
                // date={}
              />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
              key="RemySharp"
            >
              <InfoChat
                caller={"Macelly"}
                picture={"caller"}
                service={"Nova Matricula"}
                // date={}
              />
            </ListItem>
          </List>

          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            key="RemySharp"
          >
            <InfoChat
              caller={"João"}
              picture={"caller"}
              service={"Relaizar Matricula"}
              // date={}
            />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            key="RemySharp"
          >
            <InfoChat
              caller={"Macelly"}
              picture={"caller"}
              service={"Nova Matricula"}
              // date={}
            />
          </ListItem>

          <Divider />
        </InfoMsnGrip>
        <SessionMsnGrip item xs={8}>
          <SessionMsnPaper>
            <Grid container wrap="nowrap" spacing={2}>
              <Typography>{message}</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button variant="contained" color="secondary">
                Finalizar
              </Button>
            </Grid>
          </SessionMsnPaper>
        </SessionMsnGrip>
      </PageChatGrid>
    </div>
  );
}

//export default Chat;
