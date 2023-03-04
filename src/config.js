import { createContext } from "react";


export const Config = createContext({

    lang: "",
    navigation: {},
    pageOrder: [],
    theme: {},
    timeFormat: "",

    setLang: (_) => {},
    setNavigation: (_) => {},
    setPageOrder: (_) => {},
    setTheme: (_) => {},
    setTimeFormat: (_) => {}

})
