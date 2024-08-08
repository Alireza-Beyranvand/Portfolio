import Grid from "@mui/material/Unstable_Grid2";
import { Typography,  Chip, Tooltip } from "@mui/material";
import CountUp from "react-countup";

const DevWorkInfo = ({devWorkInfo}) => {
    return (
        <Grid xs={5} sm={5} md={5} lg={4} xl={4} sx={{
            margin: "0 auto ", p: 2,
            display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block"
            }
        }}>
            {devWorkInfo && devWorkInfo.map((DI, index) => (
                <Tooltip title={DI.description} placement="right" arrow>
                    <Chip key={index} icon={DI.icon} label={<Typography component="div"
                        sx={{ mt: .6 }} color="text.primary" >
                        <CountUp start={0} end={DI.total} duration={8} />
                    </Typography>} sx={{ p: 2, width: 1, mt: 2 }} />
                </Tooltip>
            ))}
        </Grid>
    )
};

export default DevWorkInfo;