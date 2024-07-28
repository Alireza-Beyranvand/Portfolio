import { Box } from "@mui/material"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TabPanel = (props) => {
    const { children, Numberpages, index, ...others } = props;


    // configuring animation for when rendering
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: .1
    });


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
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 100, }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: "0.7" }}
                        >
                            <Box sx={{ overflow: "hidden"}}>
                                {children}
                            </Box>
                        </motion.div>

                    </>
                )
            }
        </div >

    )
};

export default TabPanel;