import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import { Config } from "../config";
import { components } from "../screens/details/components";
import CategoriesScreen from "../screens/More/CategoriesScreen";
import SettingsScreen from "../screens/More/SettingsScreen";
import { FadeFromRight } from "./FadeFromRight";
import HomeNavigator from "./HomeNavigator";


const Stack = createStackNavigator();

function MoreNavigator() {

    const config = useContext(Config);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, ...FadeFromRight }}>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            {config.pageOrder.slice(5).map(key => (
                <Stack.Screen name={key} component={components[key]} key={key} />
            ))}
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}


export default MoreNavigator;
