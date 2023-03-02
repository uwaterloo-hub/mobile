import React from "react";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import MoreNavigator from "./src/navigators/MoreNavigator";


export default function App() {

    const CombinedTheme = {
        ...DarkTheme,
        ...MD3DarkTheme,
        colors: {
            ...DarkTheme.colors,
            ...MD3DarkTheme.colors
        }
    }

    return (

        <PaperProvider theme={MD3DarkTheme}>
            <NavigationContainer theme={CombinedTheme}>
                <MoreNavigator />
            </NavigationContainer>
        </PaperProvider>

    );

}
