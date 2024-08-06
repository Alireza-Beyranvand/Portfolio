import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import SlideOption from "../helpers/SlideOption";

const TabPanel = (props) => {
    const { children, Numberpages, index, ...others } = props;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false);
        }
    }, [])

    return (
        <div
            role="tabpanel"
            hidden={Numberpages !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...others}
        >
            {
                Numberpages === index && (
                    <>
                        {/* animations slider */}
                        <SlideOption start={loading} dir={"down"} delay={"400"}>
                            <Box sx={{ overflow: "hidden"}}>
                                {children}
                            </Box>
                        </SlideOption>

                    </>
                )
            }
        </div >
    )
};

export default TabPanel;