
import { Helmet } from "react-helmet"
import Grid from "@mui/material/Unstable_Grid2";

import { ThemeProvider } from '@emotion/react';
import { theme } from "./theme";
import { CacheProvider } from '@emotion/react';
import createCach from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from 'stylis-plugin-rtl';


const MainLayout = ({ children }) => {



    const cachRtl = createCach({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    })


    return (
        <>
            <CacheProvider value={cachRtl}>
                <ThemeProvider theme={theme}>
                   
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