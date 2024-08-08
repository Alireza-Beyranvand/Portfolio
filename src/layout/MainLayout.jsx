
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {lightTheme , darkTheme} from "./theme"
import Grid from "@mui/material/Unstable_Grid2"

const MainLayout = ({ children, mode }) => {


    const cacheRTL = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    });


    return (
        <>
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme }>
                    <Grid container sx={{
                        height: "100vh",
                        textAlign: "center"
                    }}>
                        {children}
                    </Grid>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
};

export default MainLayout;