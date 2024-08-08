import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { CodeRounded, ManageAccountsRounded, SettingsSuggestRounded } from "@mui/icons-material";
import { devWorkInfo } from "../../../constants/details";
import { devSkillsframework , devSkillsLanguage} from "../../../constants/skill";
import HelmetOption from "../../../helpers/HelmetOption";
import SlideOption from "../../../helpers/SlideOption";
import CustomizeDivider from "../../../components/common/CustomizeDivider";
import {
    DevWorkInfo,
    AvatarAbout,
    SkillAbout,
    MoreSkillAbout,
    DevInfo
} from "./index";


const AboutContainer = () => {

    // for transition (slide)
    const [loading, setLoading] = useState(false);

    // mount & UnMount component
    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false);
        }
    }, [])


    return (
        <Box sx={{ color: "whitesmoke" }}>
            <HelmetOption title={"درباره من"} />
            <Grid container>
                <SlideOption dir="down" start={loading} delay="200">
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 2, p: 1 }}>
                        <CustomizeDivider
                            divider={true}
                            label="مدرس و برنامه نویس فرانت اند"
                            borderC="secondary.main"
                            color="secondary"
                            dividerVarinat="fullWidth"
                            textColor="whitesmoke"
                            textVariant="body2"
                            chipIcon={<CodeRounded />}
                            loading
                        />
                        <Box sx={{
                            mt: 1.5, p: 3, display: "flex", justifyContent: {
                                xs: "center",
                                sm: "center",
                                md: "start"
                            }
                        }}>
                            <DevInfo />
                            <DevWorkInfo devWorkInfo={devWorkInfo}/>
                        </Box>
                    </Grid>
                </SlideOption>
                <AvatarAbout loading={loading} />
            </Grid >
            <Grid sx={{ mt: 2 }}>
                <CustomizeDivider
                    divider={true}
                    label="مهارت های من"
                    borderC="warning.main"
                    color="warning"
                    dividerVarinat="fullWidth"
                    textColor="text.primary"
                    textVariant="body2"
                    chipIcon={<ManageAccountsRounded />}
                    loading={loading}
                    dir="up"
                    delay="600"
                />
            </Grid>
            <SkillAbout devSkillsLanguage={devSkillsLanguage} />
            <Grid item sx={{ mt: 4 }}>
                <CustomizeDivider
                    divider={true}
                    label="ابزار , کتابخانه و فریمورک های کاربردی"
                    borderC="info.main"
                    color="info"
                    dividerVarinat="fullWidth"
                    textColor="text.primary"
                    textVariant="body2"
                    chipIcon={<SettingsSuggestRounded />}
                    loading={loading}
                    dir="right"
                    delay="600"
                />
            </Grid>
            <MoreSkillAbout loading={loading} devSkillsframework={devSkillsframework}/>
        </Box >
    )
};

export default AboutContainer;