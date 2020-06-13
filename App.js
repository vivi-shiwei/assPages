import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const App = (Component) => {

    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component />
        </ThemeProvider>
    );
}

export default App;