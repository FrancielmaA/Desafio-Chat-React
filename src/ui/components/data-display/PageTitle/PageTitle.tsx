import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  text1?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>

      {props.subtitle}
      {props.text1}
    </PageTitleContainer>
  );
};

export default PageTitle;
