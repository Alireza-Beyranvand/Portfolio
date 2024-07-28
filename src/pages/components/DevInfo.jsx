
import { Typography, Box } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material"


const DevInfo = () => {

    const Info = [
        " نام : علیرضا سپه وند",
        " شغل : توسعه دهنده , موزیسین , دانشجو",
        "سن : 21",
        "شهر : خرم اباد",
        "ایمیل : AlirezaSepahvand69@gmail.com",
    ];


    return (
        <Typography variant="body1" textAlign="left">
            {Info && Info.map((inf, index) => <Box key={index} sx={{ mt: 2.5 }}>
                <KeyboardArrowLeftRounded
                    sx={{ verticalAlign: "middle" , }} color="primary" />
                {inf}
            </Box>)}
        </Typography>
    )
};

export default DevInfo;