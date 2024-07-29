import { Box, CircularProgress, Typography, Badge, Tooltip } from "@mui/material";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";

const Skills = ({ icon, value, color, name }) => {


    // for completed linerProgress
    const [count, setCount] = useState(0);
    const maxCount = value;

    // for animation when start
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: .05
    })


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.2 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: .5, delay: .4 }}
        >
            <Tooltip title={name} placement="bottom" arrow>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 8,
                    borderRadius: "5%",
                    p: 2,
                    px: 3,
                    mb: 2,
                    backgroundColor: "#FFD700",
                    color: "#1D2951",
                    ":hover": {
                        boxShadow: 0,
                    },
                }} >
                    <Box sx={{
                        position: 'relative', display: 'inline-flex',
                        boxShadow: 6, borderRadius: "100%",
                        ":hover": {
                            boxShadow: 0,
                        }
                    }} >
                        <CircularProgress variant="determinate"
                            value={count}
                            thickness={4}
                            color={color}
                            size={90} />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Badge color={color} badgeContent={
                                <Typography variant="body3" color="whitesmoke">
                                    <CountUp
                                        start={0}
                                        end={count}
                                        duration={2}
                                        onEnd={() => setCount(maxCount)} />%
                                </Typography>
                            } />
                        </Box>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Box component="img" src={icon}
                            sx={{
                                verticalAlign: "middle",
                                boxShadow: 3, borderRadius: 2, maxWidth: 50
                            }} />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        {name}
                    </Typography>
                </Box>
            </Tooltip>
        </motion.div>
    );
};

export default Skills;