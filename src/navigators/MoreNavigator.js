import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import { FadeFromRight } from "./FadeFromRight";
import HomeNavigator from "./HomeNavigator";


const Stack = createStackNavigator();

export default function MoreNavigator() {

    return (

        <Stack.Navigator screenOptions={{ ...FadeFromRight }}>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>

    );

}
