import { createContext } from "react";


const Config = createContext({

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

});


export { Config };
