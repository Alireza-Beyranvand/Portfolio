import { useEffect, useState } from "react";
import HelmetOption from "../../helpers/HelmetOption";

import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Chip, Typography, Box, Avatar, CardContent, Card, TextField, InputAdornment, Button, Slide } from "@mui/material";

import { ConnectWithoutContactRounded, EmailRounded, SubjectRounded, Face6Rounded, FormatAlignJustify } from "@mui/icons-material";

import SlideOption from "../../helpers/SlideOption";

import { devCallMe } from "../../constants/details";
import "../../constants/style.css"
const Contact = () => {


    // for slideOption

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, [])





    return (
        <>
            <HelmetOption title="ارتباط با من" />

            <SlideOption dir="left" start={loading} delay="400">
                <Divider textAlign="center" sx={{
                    "&::before, &::after": {
                        borderColor: "secondary.main"
                    },
                    mt: 3, mb: 8,
                }}>
                    <Chip label={<Typography variant="body1"
                        color="text.primary" >ارتباط با من</Typography>}
                        icon={< ConnectWithoutContactRounded />} color="primary" sx={{ p: 3, px: 15 }} />
                </Divider>
            </SlideOption>


            <SlideOption dir="left" start={loading} delay="400">
                    <Chip label={<Typography variant="body1"
                        color="text.primary" className="textAnimation" >بیا صحبت کنیم دوست من !</Typography>}
                        sx={{ p: 2  , mt : 3}} />
            </SlideOption>


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
                        <Grid item xs={12} md={4} >
                            <Avatar
                                src={cm.logo}
                                sx={{
                                    height: "10rem", width: "10rem",
                                    mx: "auto", my: "auto",
                                }} />
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

export default Contact;