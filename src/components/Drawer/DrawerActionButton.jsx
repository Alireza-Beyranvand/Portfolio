
import { Box, Fab } from "@mui/material"
import { Menu } from "@mui/icons-material";

import { useContext } from "react";
import MainContext from "../../context/index";

const DrawerActionButton = () => {

    const { setDrawerOpen, drawerOpen } = useContext(MainContext)

    return (
        <Box position="absolute" sx={{
            textAlign: 'center', justifyContent: "center", mt: 2,
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none"
            }
        }}>
            <Fab
                color="primary"
                aria-label="sidebar"
                size="small"
                sx={{ m: 2 }}
                onClick={() => setDrawerOpen(true)}
                variant>
                <Menu fontSize="1rem" />
            </Fab>
        </Box>
    )
};

export default DrawerActionButton;