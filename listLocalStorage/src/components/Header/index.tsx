import React from "react";
import { Container, BackIcon, BackButton, HeaderLabel } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon color='#FFF' />
        </BackButton>
      )}
      <HeaderLabel>Home</HeaderLabel>
    </Container>
  );
}
