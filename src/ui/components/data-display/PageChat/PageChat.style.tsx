import { Container, Paper, styled } from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";

export const PageChatGrid = styled(Grid)`
  width: 100%;
  height: 100%; // colocar spacing={1}
`;

export const InfoMsnGrip = styled(Grid)`
  direction: column;
  border-right: 2px solid #e0e0e0; // colocar xs=4
`;

export const SessionMsnGrip = styled(Grid)`
  direction: column;
  align-items: center;
`;

export const SessionMsnPaper = styled(Paper)`
  margin: ${({ theme }) => theme.spacing(2)} auto;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.grey[100]};
  direction: column;
`;
