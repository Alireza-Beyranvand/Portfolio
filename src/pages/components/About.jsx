import { Box, Typography, Avatar, Chip, Divider, Tooltip, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Bg from "../../assets/Screenshot_۲۰۲۴۰۳۰۱_۲۳۵۳۵۳_Gallery.jpg";
import { CodeRounded, ManageAccountsRounded, SettingsSuggestRounded } from "@mui/icons-material";
import DevInfo from "./DevInfo";
import Skills from "../../components/Skills";
import { devSkillsLanguage, devSkillsframework } from "../../constants/skill";
import { devWorkInfo } from "../../constants/details";
import CountUp from "react-countup";
import HelmetOption from "../../helpers/HelmetOption";
import { useEffect, useState } from "react";


const About = () => {


    // loop on devSkills {object}
    const devLanguageLoop = Object.values(devSkillsLanguage);
    const devframeworkLoop = Object.values(devSkillsframework);


    const [loading, setLoading] = useState(false);


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
                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "400ms" : "0ms"
                }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 2, p: 1 }}>

                        <Divider variant="fullWidth" sx={{
                            px: 1,
                            "&::before , &::after":
                                { borderColor: "secondary.main" }
                        }} >
                            <Chip label={
                                <Typography variant="body2" color="whitesmoke">
                                    مدرس و برنامه نویس فرانت اند
                                </Typography>
                            } variant="filled"
                                color="secondary" icon={<CodeRounded />} sx={{ p: 3 }}
                            />
                        </Divider>


                        <Box sx={{
                            mt: 1.5, p: 3, display: "flex", justifyContent: {
                                xs: "center",
                                sm: "center",
                                md: "start"
                            }
                        }}>
                            <DevInfo />
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
                                            sx={{ mt: .6 }}>
                                            <CountUp start={0} end={DI.total} duration={8} />
                                        </Typography>} sx={{ p: 2, width: 1, mt: 2 }} />
                                    </Tooltip>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Slide>

                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "500ms" : "0ms"
                }}>
                    <Grid xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: 3 }}>
                        <Tooltip title="برات نمرا بیرنون 😎😁" placement="right" arrow >
                            <Avatar src={Bg} variant="rounded" sx={{
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
                </Slide>
            </Grid >
            <Grid sx={{ mt: 2 }}>
                <Slide direction="up" in={loading} style={{
                    transitionDelay: loading ? "400ms" : "0ms"
                }}>
                    <Divider variant="middle"
                        sx={{
                            "&::before,&::after": {
                                borderColor: "primary.main"
                            }
                        }}>
                        <Chip variant="filled" color="primary" label={
                            <Typography variany="body2" color="black" >
                                مهارت های من
                            </Typography>
                        } icon={<ManageAccountsRounded />} sx={{ p: 3 }} />
                    </Divider>
                </Slide>
            </Grid>
            <Grid container sx={{
                display: "flex",
                justifyContent: "space-evenly", mt: 6,
            }}>
                {devSkillsLanguage && devLanguageLoop.map((ds) => (
                    <Skills value={ds.value}
                        icon={ds.icon}
                        color={ds.color}
                        name={ds.name} />
                ))}
            </Grid>

            <Grid item sx={{ mt: 4 }}>
                <Slide direction="right" in={loading} style={{
                    transitionDelay: loading ? "800ms" : "0ms"
                }}>
                    <Divider variant="middle" sx={{
                        "&::before,&::after": {
                            borderColor: "info.main"
                        }
                    }}>
                        <Chip variant="filled" color="info" label={
                            <Typography variant="body2" color="black">
                                ابزار , کتابخانه و فریمورک های کاربردی
                            </Typography>
                        } sx={{ p: 3 }}
                            icon={<SettingsSuggestRounded />} />
                    </Divider>
                </Slide>
            </Grid>

            <Slide direction="up" in={loading} style={{
                transitionDelay: loading ? "600ms" : "0ms"
            }}>
                <Grid container sx={{
                    display: "flex",
                    justifyContent: "space-evenly", mt: 6,
                }} >
                    {devSkillsframework && devframeworkLoop.map((df) => (
                        <Skills value={df.value}
                            icon={df.icon}
                            color={df.color}
                            name={df.name} />
                    ))}
                </Grid>
            </Slide>
        </Box >
    )
};

export default About;