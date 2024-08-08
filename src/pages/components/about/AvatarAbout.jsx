import Grid from "@mui/material/Unstable_Grid2";
import {White} from "../../../assets/MyImages"
import { Avatar, Tooltip } from "@mui/material";
import SlideOption from "../../../helpers/SlideOption";

const AvatarAbout = ({loading}) => {
    return(
        <SlideOption dir="right" start={loading} delay="400">
        <Grid xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: 3 }}>
            <Tooltip title="برات نمرا بیرنون 😎😁" placement="right" arrow >
                <Avatar src={White} variant="rounded" sx={{
                    height: "20rem", width: "23vw",
                    boxShadow: 2, margin: "0 auto", mt: 2.8, display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block"
                    }
                }}>
                    AS
                </Avatar>
            </Tooltip>
        </Grid>
    </SlideOption>
    )
};

export default AvatarAbout;