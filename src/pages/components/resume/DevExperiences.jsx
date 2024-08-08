import {useContext } from "react";
import MainContext from "../../../context/index";
import { Box } from "@mui/material";
import { SettingsRounded, } from "@mui/icons-material"
import TimeLineResume from "./TimeLineResume";
import CustomizeDivider from "../../../components/common/CustomizeDivider";


const DevExperiences = ({ loading , devExperiences }) => {
    

    
    return (
        <>

            <CustomizeDivider
                divider={true}
                label="تجربیات من "
                color="warning"
                dividerVarinat="fullWidth"
                textColor="text.primary"
                textVariant="body1"
                chipIcon={< SettingsRounded />}
                loading={loading}
                dir="down"
                delay="500"
            />

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
        </>
    )
};

export default DevExperiences;