import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const App = (Component) => {

    return (
        <ThemeProvider theme={theme}>
            <CSSReset bg="blue.50" />
            <Component />
        </ThemeProvider>
    );
}

export default App;