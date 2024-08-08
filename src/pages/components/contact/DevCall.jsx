
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Avatar, Tooltip , Divider} from "@mui/material";
import SlideOption from "../../../helpers/SlideOption";



const DevCall = ({ loading, devCallMe }) => {
    return (
        <>

            {devCallMe && devCallMe.map((cm, index) => (
                <SlideOption key={index} start={loading} dir="right" delay={`${index + 2}60`}>
                    <Grid conatainer sx={{
                        display: "flex",
                        my: 7,
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        }
                    }} >
                        <Tooltip la>

                        </Tooltip>
                        <Grid item xs={12} md={4} >
                            <Tooltip title={`برای ورود کلیک کنید`} placement="top">
                            <a href={cm.href} target="_blank" style={{textDecoration:"none"}} >
                                <Avatar
                                    src={cm.logo}
                                    sx={{
                                        height: "10rem", width: "10rem",
                                        mx: "auto", my: "auto",
                                    }} />
                            </a>
                            </Tooltip>
                        
                        </Grid>
                        <Grid item xs={12} md={4} sx={{
                            my: "auto", mt: {
                                xs: 4, md: "auto"
                            }
                        }}>
                            <Typography variant="body1" color="text.primary" >
                                {cm.url}
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} sx={{
                            my: "auto", display: {
                                xs: "none",
                                md: "block"
                            }
                        }}>
                            <Typography variant="h6" color="text.primary" >
                                : {cm.name}
                            </Typography>

                        </Grid>
                    </Grid>
                </SlideOption>
            ))}
        </>

    )
};

export default DevCall;