
import { useContext } from "react";
import MainContext from "../../context/index";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

const ModeActionButton = ({ Display }) => {

    const { handleThemeMode , statusMode} = useContext(MainContext);

    return (
        <>

            <Box position="absolute" sx={{
                textAlign: 'center', justifyContent: "center"
            }}>
                <Fab
                    aria-label="sidebar"
                    size="small"
                    sx={{
                        m: 2,
                        backgroundColor: statusMode === "dark" ? "black" : "whitesmoke",
                        color: "text.primary",
                        "&:hover": {
                            backgroundColor: statusMode === "dark" ? "gray" : "lightgray"
                        },
                        display: Display
                    }}
                    onClick={handleThemeMode}
                    variant="extended"
                >
                    {statusMode === "dark" ? <NightlightOutlined sx={{ mr: 1 }} /> :
                        <WbSunnyOutlined sx={{ mr: 1 }} />}
                    {statusMode === "dark" ? "تم شب " : "تم روز"}
                </Fab>
            </Box>
        </>
    )
};

export default ModeActionButton;