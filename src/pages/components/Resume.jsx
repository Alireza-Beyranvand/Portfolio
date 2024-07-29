import { Chip, Divider, Typography } from "@mui/material";
import HelmetOption from "../../helpers/HelmetOption";
import { Description, SchoolRounded, SettingsRounded, } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2";
import TimeLineResume from "./TimeLineResume";

import { devEdu, devExperiences } from '../../constants/details';
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
            <SlideOption dir="down" start={loading} delay="500">
                <Divider textAlign="center" sx={{
                    "&::before, &::after": {
                        borderColor: "secondary.main"
                    },
                    mt: 3,
                }}>
                    <Chip label={<Typography variant="body1"
                        color="whitesmoke" >رزومه ی من</Typography>}
                        icon={< Description />} color="secondary" sx={{ p: 3, px: 15 }} />
                </Divider>
            </SlideOption>

            <Grid container sx={{ mt: 10 }}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <SlideOption dir="up" start={loading} delay="500">
                        <Divider textAlign="center" sx={{
                        }}>
                            <Chip label={<Typography variant="body1"
                                color="black" >تجربیات من</Typography>}
                                icon={< SettingsRounded />} color="warning" sx={{ p: 3 }} />
                        </Divider>
                    </SlideOption>

                    {devExperiences && devExperiences.map((dx, index) =>
                        <TimeLineResume
                            option={dx.responsibility}
                            company={dx.company}
                            time={dx.period}
                            key={index}
                            icon={dx.icon}
                            index={index} 
                            delay="100"/>)}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                    <SlideOption dir="down" start={loading} delay="500">
                        <Divider textAlign="center">
                            <Chip label={<Typography variant="body1"
                                color="black" >تحصیلات من</Typography>}
                                icon={< SchoolRounded />} color="info" sx={{ p: 3 }} />
                        </Divider>
                    </SlideOption>

                    {devEdu && devEdu.map((de, index) =>
                        <TimeLineResume
                            option={de.Evidence}
                            key={index}
                            time={de.year}
                            school={de.school}
                            index={index}
                            icon={de.icon} 
                            delay="200"/>)}
                </Grid>
            </Grid>
        </>
    )
};

export default Resume;