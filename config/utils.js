function toNavigationTheme(paperTheme) {

    return {
        dark: true,
        colors: {
            primary: paperTheme.primary,
            background: paperTheme.background,
            card: paperTheme.elevation.level2,
            text: paperTheme.inverseSurface,
            border: paperTheme.outline,
            notification: "#f50056"
        }
    }

}


export { toNavigationTheme };
