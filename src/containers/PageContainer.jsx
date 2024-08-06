import { useContext } from "react";
import mainContext from "../context/index";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

const PageContainer = ({ children }) => {

    const { statusMode } = useContext(mainContext)

    return (
        <Grid xs={12}
            sm={12}
            md={9}
            lg={9.6}
            xl={9.6}
            sx={{
                backgroundColor: statusMode === "dark" ? "#1D2951" : grey[200],
                height: "100vh", overflow: "auto"
            }}
            className="hide-scrollbar">
            {children}
        </Grid>

    )
};

export default PageContainer;