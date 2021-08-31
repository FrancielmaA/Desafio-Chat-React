import { styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 30px;
    }
  }
`;
