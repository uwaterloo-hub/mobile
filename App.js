import React, { useState } from "react";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import themes from "./config/themes/themes";
import { toNavigationTheme } from "./config/utils";
import MoreNavigator from "./src/navigators/MoreNavigator";
import { Config } from "./src/config";


export default function App() {

    const [lang, setLang] = useState("en");
    const [navigation, setNavigation] = useState({});
    const [pageOrder, setPageOrder] = useState(
        ["Weather", "Maps", "Schedule", "Rooms", "More", "GRT", "Recreation"]);
    const [theme, setTheme] = useState(themes.DefaultTheme);
    const [timeFormat, setTimeFormat] = useState("");

    return (
        <Config.Provider value={{
            lang, setLang, navigation, setNavigation, pageOrder, setPageOrder, theme, setTheme,
            timeFormat, setTimeFormat
        }}>
            <PaperProvider theme={{ ...MD3DarkTheme, colors: theme }}>
                <NavigationContainer theme={toNavigationTheme(theme)}>
                    <MoreNavigator />
                </NavigationContainer>
            </PaperProvider>
        </Config.Provider>
    );

}
