
import {Box} from "@mui/material";
import { SchoolRounded } from "@mui/icons-material"
import TimeLineResume from "./TimeLineResume";
import CustomizeDivider from "../../../components/common/CustomizeDivider";


const DevEdu = ({loading , devEdu}) => {

    
    return(
        <>

        <CustomizeDivider
            divider={true}
            label="تحصیلات من "
            color="error"
            dividerVarinat="fullWidth"
            textColor="text.primary"
            textVariant="body1"
            chipIcon={< SchoolRounded />}
            loading={loading}
            dir="up"
            delay="500"
        />

        {devEdu && devEdu.map((de, index) =>
            <Box component="div" sx={index !== 1 ? { mt: 6 } : {}}>
                <TimeLineResume
                    option={de.Evidence}
                    key={index}
                    time={de.year}
                    school={de.school}
                    index={index}
                    icon={de.icon}
                    delay="90" />
            </Box>)}

    </>
    )
};

export default DevEdu;