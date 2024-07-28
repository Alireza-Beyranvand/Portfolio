import Grid from "@mui/material/Unstable_Grid2";

const PageContainer = ({ children }) => {
    return (
        
        <Grid xs={12}
            sm={12}
            md={9}
            lg={9.6}
            xl={9.6}
            sx={{ backgroundColor: "#1D2951" , height:"100vh" , overflow:"auto" }} 
            className="hide-scrollbar">
            {children}
        </Grid>

    )
};

export default PageContainer;