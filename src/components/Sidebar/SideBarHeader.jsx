
import { Box, Avatar, Divider, Typography, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { RandomReveal } from "react-random-reveal";
import { alphaberPersian } from "../../constants/alphabetPersian";
import { socialMedia } from "../../constants/socialMediaIcon";
import {Yellow} from "../../assets/MyImages";
import ModeActionButton from "../common/ModeActionButton";


const SideBarHeader = () => {
    return (
        <>
            <Box component="div" sx={{
                display: {
                    xs: "none",
                    sm: "none",
                    md: "flex"
                },
                justifyContent: "end"
            }}>
                <ModeActionButton />
            </Box>
            <Box sx={{ textAlign: 'center', justifyContent: "center", mt: 2 }}>
                <Avatar src={Yellow} variant="rounded"
                    sx={{
                        height: 270, width: 250, mx: "auto", mt: -.5, mb: 1.5,
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "block",
                            xl: "block"
                        }
                    }}>
                    AS
                </Avatar>
                <Typography variant="h5" color="text.primary" sx={{ mt: 1 }}>
                    <RandomReveal isPlaying duration={4} characterSet={alphaberPersian} characters={"علیرضا سپه وند"} />
                </Typography>
                <Typography variant="caption" color="text.primary">
                    <RandomReveal isPlaying duration={7} characterSet={alphaberPersian} characters={"مدرس برنامه نویسی و توسعه دهنده"} />
                </Typography>
                <Divider variant="middle" color={grey[800]} sx={{ mt: 1 }} />
                {
                    socialMedia && socialMedia.map((sm) => (
                        <IconButton key={sm.id} sx={{
                            p: {
                                xs: 2,
                                sm: 2,
                                md: 1,
                                lg: 1,
                                xl: 1,
                            }
                        }}>
                            <a href={sm.url} target="_blank" rel="nofollow noreferrer"
                                style={{ color: "gray", padding: "0", margin: "0" }} >
                                {sm.icon}
                            </a>
                        </IconButton>
                    ))
                }
            </Box>

        </>

    )
};

export default SideBarHeader;