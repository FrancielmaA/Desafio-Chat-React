import { styled } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

export const InfoChatContainer = styled("div")`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar caller "
    "avatar service";
  padding: ${({ theme }) => theme.spacing(0)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(1)};
  align-items: left;
`;
export const InfoChatName = styled("div")`
  grid-area: caller;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const InfoChatDate = styled("div")`
  grid-area: date;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const InfoChatService = styled("div")`
  grid-area: service;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 80%;
  height: initial;
  aspect-ratio: 1;
`;
