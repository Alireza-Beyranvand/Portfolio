import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HelmetOption from "../../../helpers/HelmetOption";
import { CodeOutlined } from "@mui/icons-material";
import CustomizeDivider from "../../../components/common/CustomizeDivider";
import { workSample } from "../../../constants/workSample";
import Samples from "./Samples";



const WorkSamples = () => {


    // state for animation
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, [])


    return (
        <>
            <HelmetOption title="نمونه کار های من" />
            <Box sx={{ mt: 3 }}>
                <CustomizeDivider
                    divider={true}
                    label="نمونه کار های من"
                    color="error"
                    borderC="silver"
                    dividerVarinat="fullWidth"
                    textColor="text.primary"
                    textVariant="body1"
                    chipIcon={<CodeOutlined />}
                    loading={loading}
                    dir="down"
                    delay="400"
                    sx={{ px: 5 }}
                />
            </Box>
            <Samples
                loading={loading}
                workSample={workSample} />
        </>
    )
};

export default WorkSamples;