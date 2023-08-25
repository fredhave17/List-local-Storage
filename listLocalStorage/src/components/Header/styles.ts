import { theme } from "./../../theme/index";
import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const HeaderLabel = styled.Text`
  color: #ffff;
  font-size: 18px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft)`
  size: 36;
`;
