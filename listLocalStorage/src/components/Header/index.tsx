import React from "react";
import { Container, Logo, BackIcon, BackButton, HeaderLabel } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import logo from "../../assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon color='#FFF' />
        </BackButton>
      )}
      <HeaderLabel>Home</HeaderLabel>
    </Container>
  );
}
