import { createContext } from "react";
import themes from "../config/themes/themes";


export const Settings = createContext({

    lang: "en",
    navigator: {},
    theme: themes.DefaultTheme,
    timeFormat: "",

    setLang: (_) => {},
    setNavigator: (_) => {},
    setTheme: (_) => {},
    setTimeFormat: (_) => {}

})
