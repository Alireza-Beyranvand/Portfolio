import { Box, Slide } from "@mui/material"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
                        <Slide direction="down" in={loading} style={{
                            transitionDelay: loading ? "500ms" : "0ms"
                        }}>
                            <Box sx={{ overflow: "hidden" }}>
                                {children}
                            </Box>

                        </Slide>

                    </>
                )
            }
        </div >

    )
};

export default TabPanel;