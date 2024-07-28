import { Chip, Divider, Typography } from "@mui/material";
import HelmetOption from "../../helpers/HelmetOption";
import { Description, SchoolRounded , SettingsRounded} from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2";
import TimeLineResume from "./TimeLineResume";

import { devEdu, devExperiences } from '../../constants/details';


const Resume = () => {
    return (
        <>
            <HelmetOption title={"رزومه من"} />
            <Divider textAlign="center" sx={{
                "&::before, &::after": {
                    borderColor: "secondary.main"
                },
                mt: 3,
            }}>
                <Chip label={<Typography variant="body1"
                    color="whitesmoke" >رزومه ی من</Typography>}
                    icon={< Description  />} color="secondary" sx={{ p: 3, px: 15 }} />
            </Divider>
            <Grid container sx={{ mt: 10 }}>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Divider textAlign="center" sx={{
                    }}>
                        <Chip label={<Typography variant="body1"
                            color="black" >تجربیات من</Typography>}
                            icon={< SettingsRounded />} color="warning" sx={{ p: 3 }} />
                    </Divider>
                    {devExperiences && devExperiences.map((dx, index) =>
                        <TimeLineResume
                            option={dx.responsibility}
                            company ={dx.company}
                            time={dx.period}
                            key={index}
                            icon={dx.icon}
                            index={index} />)}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                    <Divider textAlign="center">
                        <Chip label={<Typography variant="body1"
                            color="black" >تحصیلات من</Typography>}
                            icon={< SchoolRounded />} color="info" sx={{ p: 3 }} />
                    </Divider>
                    {devEdu && devEdu.map((de, index) =>
                        <TimeLineResume
                            option={de.Evidence}
                            key={index}
                            time={de.year}
                            school={de.school}
                            index={index}
                            icon={de.icon} />)}
                </Grid>
            </Grid>
        </>
    )
};

export default Resume;