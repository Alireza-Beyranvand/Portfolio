
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import createCach from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from 'stylis-plugin-rtl';
import { lightTheme, darkTheme } from "./theme"

const MainLayout = ({ children, mode }) => {


    const cachRtl = createCach({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    });


    return (
        <>
            <CacheProvider value={cachRtl}>
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