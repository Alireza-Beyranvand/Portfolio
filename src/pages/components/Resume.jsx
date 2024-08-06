import { Chip, Divider, Typography, Box, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";
import HelmetOption from "../../helpers/HelmetOption";
import { Description, SchoolRounded, SettingsRounded, LibraryAddRounded } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2";
import TimeLineResume from "./TimeLineResume";

import { devEdu, devExperiences, devDocuments } from '../../constants/details';
import { useEffect, useState } from "react";
import SlideOption from "../../helpers/SlideOption";


const Resume = () => {


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
            <HelmetOption title={"رزومه من"} />
            <SlideOption dir="left" start={loading} delay="300">
                <Divider textAlign="center" sx={{
                    "&::before, &::after": {
                        borderColor: "secondary.main"
                    },
                    mt: 3,
                }}>
                    <Chip label={<Typography variant="body1"
                         color="text.primary" >رزومه ی من</Typography>}
                        icon={< Description />} color="secondary" sx={{ p: 3, px: 15 }} />
                </Divider>
            </SlideOption>

            <Grid container sx={{ mt: 10 }}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <SlideOption dir="down" start={loading} delay="500">
                        <Divider textAlign="center">
                            <Chip label={<Typography variant="body1"
                                 color="text.primary">تجربیات من</Typography>}
                                icon={< SettingsRounded />} color="warning" sx={{ p: 3 }} />
                        </Divider>
                    </SlideOption>

                    {devExperiences && devExperiences.map((dx, index) =>
                        <Box component="div" sx={index !== 1 ? { mt: 6 } : {}}>
                            <TimeLineResume
                                option={dx.responsibility}
                                company={dx.company}
                                time={dx.period}
                                key={index}
                                icon={dx.icon}
                                index={index}
                                delay="90" />
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                    <SlideOption dir="up" start={loading} delay="500">
                        <Divider textAlign="center">
                            <Chip label={<Typography variant="body1"
                                 color="text.primary" >تحصیلات من</Typography>}
                                icon={< SchoolRounded />} color="error" sx={{ p: 3 }} />
                        </Divider>
                    </SlideOption>

                    {devEdu && devEdu.map((de, index) =>
                        <Box component="div" sx={index !== 1 ? { mt: 6 } : {}}>
                            <TimeLineResume
                                option={de.Evidence}
                                key={index}
                                time={de.year}
                                school={de.school}
                                index={index}
                                icon={de.icon}
                                delay="90" />
                        </Box>)}

                </Grid>
            </Grid>
            <SlideOption dir="right" start={loading} delay="300">
                <Box component="div" sx={{ mt: 4 }}>
                    <Divider textAlign="center" sx={{
                        "&::before , &&::after": {
                            borderColor: "primary.main"
                        }
                    }}>
                        <Chip color="primary" label={
                            <Typography variant="body2" color="black">
                                سایر مدارک من
                            </Typography>
                        } icon={<LibraryAddRounded />} sx={{ p: 3, px: 15 }} />
                    </Divider>
                </Box>
            </SlideOption>
            <Grid>
                <Grid container sx={{ display: "flex", justifyContent: "space-around", mt: 9 }} >
                    {devDocuments && devDocuments.map((dD, index) => (
                        <SlideOption dir="up" start={loading} delay={`${index + 3}90`}>
                            <Grid item xs={7}
                                sm={4}
                                md={4}
                                lg={4}
                                xl={5}
                                key={index} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 8
                                }}>
                                <Card sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "60%",
                                        lg: "60%",
                                        xl: "80%"
                                    },
                                    boxShadow: 5
                                }} textAlign="center"  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={dD.image}
                                            alt={dD.DocumentName}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom textAlign="center" variant="body1" component="div">
                                                {dD.DocumentName}
                                            </Typography>
                                            <Typography variant="body2">
                                                {dD.level}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </SlideOption>

                    ))}
                </Grid>

            </Grid>

        </>
    )
};

export default Resume;