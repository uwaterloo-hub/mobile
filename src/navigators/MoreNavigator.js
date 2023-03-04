import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Config } from "../config";
import { componentMap } from "../screenMaps";
import SettingsScreen from "../screens/SettingsScreen";
import { FadeFromRight } from "./FadeFromRight";
import HomeNavigator from "./HomeNavigator";


const Stack = createStackNavigator();

export default function MoreNavigator() {
    
    const config = useContext(Config);

    return (

        <Stack.Navigator screenOptions={{ headerShown: false, ...FadeFromRight }}>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            {config.pageOrder.slice(5).map(key => (
                <Stack.Screen name={key} component={componentMap[key]} key={key} />
            ))}
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>

    );

}
