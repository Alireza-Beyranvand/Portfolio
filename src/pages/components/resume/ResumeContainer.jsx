import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Description, LibraryAddRounded } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2";
import { devDocuments, devEdu , devExperiences} from '../../../constants/details';
import HelmetOption from "../../../helpers/HelmetOption";
import CustomizeDivider from "../../../components/common/CustomizeDivider";
import { DevEdu, DevExperiences, DevDocuments } from "./index";



const ResumeContainer = () => {

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
            <Box sx={{ mt: 3 }}>
                <CustomizeDivider
                    divider={true}
                    label="رزومه من"
                    borderC="secondary.main"
                    color="secondary"
                    dividerVarinat="fullWidth"
                    textColor="text.primary"
                    textVariant="body1"
                    chipIcon={< Description />}
                    loading={loading}
                    dir="left"
                    delay="300"
                />
            </Box>
            <Grid container sx={{ mt: 10 }}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <DevExperiences loading={loading} devExperiences={devExperiences}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                    <DevEdu loading={loading} devEdu={devEdu} />
                </Grid>
            </Grid>
            <Box component="div" sx={{ mt: 4 }}>
                <CustomizeDivider
                    divider={true}
                    label="سایر مدارک من"
                    color="primary"
                    dividerVarinat="fullWidth"
                    textColor="text.primary"
                    textVariant="body1"
                    chipIcon={<LibraryAddRounded />}
                    loading={loading}
                    dir="up"
                    delay="500"
                    sx={{ px: 15 }}
                />
            </Box>
            <Grid>
                <Grid container sx={{ display: "flex", justifyContent: "space-around", mt: 9 }} >
                    <DevDocuments loading={loading} devDocuments={devDocuments} />
                </Grid>

            </Grid>
        </>
    )
};

export default ResumeContainer;