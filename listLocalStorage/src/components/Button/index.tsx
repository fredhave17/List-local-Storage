import React from "react";

import { TouchableOpacityProps, View } from "react-native";

import { ContainerPrimary, ContainerSecondary, Title } from "./styles";

export type ButtonTypeStyleProps = "Primary" | "Secondary";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "Primary", ...rest }: Props) {
  return (
    <>
      {type ? (
        "Primary" && (
          <ContainerPrimary {...rest}>
            <Title>{title}</Title>
          </ContainerPrimary>
        )
      ) : (
        <ContainerSecondary {...rest}>
          <Title>{title}</Title>
        </ContainerSecondary>
      )}
    </>
  );
}
