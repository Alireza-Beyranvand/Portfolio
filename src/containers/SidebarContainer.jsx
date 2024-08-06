
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import  mainContext  from "../context/index";

const SideBarContainer = ({ children }) => {

    const { statusMode } = useContext(mainContext);

    return (

        <Grid xs={0}
            sm={0}
            md={3}
            lg={2.4}
            xl={2.4}
            sx={{
                backgroundColor: statusMode === "light" ? "whitesmoke" : grey[900],
                height: "100vh", overflowY: "auto",
                borderRight: {
                    xs: "none",
                    md: `1px solid ${grey[900]}`
                }
            }}
            className="hide-scrollbar"
        >
            {children}
        </Grid>

    )
};

export default SideBarContainer;