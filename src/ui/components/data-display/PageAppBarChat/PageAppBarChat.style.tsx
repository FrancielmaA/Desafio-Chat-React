import { styled, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const PageChatAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  flex-grow: 1;
`;

export const TitleChatBar = styled(Typography)`
  flex-grow: 1;
  color: "white";
`;
