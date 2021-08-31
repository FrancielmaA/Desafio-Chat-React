import { styled } from "@material-ui/core";

export const PageLoginContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
  padding-top: 24px;
`;
