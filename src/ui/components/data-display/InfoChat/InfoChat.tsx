import React from "react";
import {
  InfoChatContainer,
  InfoChatName,
  InfoChatService,
  AvatarStyled,
  // InfoChatDate,
} from "./InfoChat.style";

interface InfoChatProps {
  picture: string;
  caller: string;
  service: string;
  // date: Date;
}

const InfoChat: React.FC<InfoChatProps> = ({
  caller,
  picture,
  service,
  //date,
}) => {
  return (
    <InfoChatContainer>
      <AvatarStyled>{caller[0]}</AvatarStyled>
      <InfoChatName>{caller}</InfoChatName>
      <InfoChatService>{service}</InfoChatService>
      {/* <InfoChatDate>{date}</InfoChatDate> */}
    </InfoChatContainer>
  );
};

export default InfoChat;
