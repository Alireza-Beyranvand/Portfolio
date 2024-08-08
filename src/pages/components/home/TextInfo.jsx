
import { Box, Typography } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";


const TextInfo = ({  index , color , BioAn  }) => {


    const string = [
        "توسعه دهنده",
        "برنامه نویس",
        "موزیسین",
        "مدرس"
    ];



    return (
        <Box component="div" sx={{
            display: "flex", justifyContent: "center", mt: 3
        }}>
            <Typography variant="h5" color={color} ref={BioAn} sx={{
                textDecoration: "underline whitesmoke", mx: 1

            }}>
                #
            </Typography>
            <TextTransition springConfig={presets.wobbly} >
                <Typography variant="h5" color={color} sx={{
                    textDecoration: "underline whitesmoke"
                }}>
                    {string[index % string.length]}
                </Typography>
            </TextTransition>
        </Box>
    )
};

export default TextInfo;