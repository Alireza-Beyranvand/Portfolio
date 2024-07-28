
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

const SideBarContainer = ({ children }) => {
    return (
 
        <Grid xs={0}
            sm={0}
            md={3}
            lg={2.4}
            xl={2.4}
            sx={{ backgroundColor: grey[900], height: "100vh", overflowY: "auto" }}
            className="hide-scrollbar"
        >
            {children}
        </Grid>
 
    )
};

export default SideBarContainer;