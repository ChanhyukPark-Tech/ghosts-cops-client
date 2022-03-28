import React from "react";
import styled from "styled-components";
import GHeader from "~/components/Common/GHeader/GHeader";
import Colors from "~/constants/Colors";
import { GlobalStyle } from "~/styles/Global.style";

type MainLayoutPropsType = {
  children: React.ReactElement;
};

const Container = styled.div`
  background-color: ${Colors.black};
  min-height: 100vh;
`;

const MainLayout = (props: MainLayoutPropsType) => {
  return (
    <Container>
      <GlobalStyle />
      <GHeader />

      {props.children}
    </Container>
  );
};

export default MainLayout;
