import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ContainerPrimary = styled(TouchableOpacity)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  align-items: center;
  justify-content: center;

  background-color: green;
  border-radius: 6px;
`;

export const ContainerSecondary = styled(TouchableOpacity)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: red;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #ffff;
  font-family: "Bold";
`;
