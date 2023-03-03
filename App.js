import React, { useState } from "react";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import themes from "./config/themes/themes";
import { toNavigationTheme } from "./config/utils";
import MoreNavigator from "./src/navigators/MoreNavigator";
import { Settings } from "./src/settings";


export default function App() {

    const [lang, setLang] = useState("en");
    const [navigator, setNavigator] = useState({});
    const [theme, setTheme] = useState(themes.DefaultTheme);
    const [timeFormat, setTimeFormat] = useState("");

    return (
        <Settings.Provider value={{
            lang, setLang, navigator, setNavigator, theme, setTheme, timeFormat, setTimeFormat
        }}>
            <PaperProvider theme={{ ...MD3DarkTheme, colors: theme }}>
                <NavigationContainer theme={toNavigationTheme(theme)}>
                    <MoreNavigator />
                </NavigationContainer>
            </PaperProvider>
        </Settings.Provider>
    );

}
