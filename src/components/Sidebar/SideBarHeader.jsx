
import { Box, Avatar, Divider, Typography, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import img from '../../assets/Screenshot_۲۰۲۴۰۷۲۲_۱۷۰۹۴۰_Gallery.jpg'

import { RandomReveal } from "react-random-reveal";
import { alphaberPersian } from "../../constants/alphabetPersian";

import { socialMedia } from "../../constants/socialMediaIcon";

const SideBarHeader = () => {
    return (

        <Box sx={{ textAlign: 'center', justifyContent: "center", mt: 2 }}>
            <Avatar src={img} variant="rounded"
                sx={{
                    height: 265, width: 250, margin: "0 auto",

                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        xl: "block"
                    }
                }}
            >
                AS
            </Avatar>
            <Typography variant="h5" color="whitesmoke" sx={{ mt: 1 }}>
                <RandomReveal isPlaying duration={4} characterSet={alphaberPersian} characters={"علیرضا سپه وند"} />
            </Typography>
            <Typography variant="caption" color="whitesmoke">
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
    )
};

export default SideBarHeader;