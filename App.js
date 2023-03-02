import React from "react";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import * as themes from "./config/themes/themes"
import { toNavigationTheme } from "./config/utils";
import MoreNavigator from "./src/navigators/MoreNavigator";


export default function App() {

    return (

        <PaperProvider theme={{ ...MD3DarkTheme, colors: themes.DefaultTheme }}>
            <NavigationContainer theme={toNavigationTheme(themes.DefaultTheme)}>
                <MoreNavigator/>
            </NavigationContainer>
        </PaperProvider>

    );

}
