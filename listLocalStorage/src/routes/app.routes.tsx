import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/group";
import { NewGroup } from "@screens/newGroup";
import { Players } from "@screens/players";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='groups' component={Groups} />
      <Screen name='new' component={NewGroup} />
      <Screen name='players' component={Players} />
    </Navigator>
  );
}
