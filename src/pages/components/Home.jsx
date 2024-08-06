import { useContext, useEffect, useRef, useState } from "react";
import MainContext from "../../context/index";
import { Avatar, Box, Typography } from "@mui/material";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextTransition, { presets } from "react-text-transition";
import HelmetOption from "../../helpers/HelmetOption";
import "../../constants/style.css"
import bg3 from "../../assets/1.jpg"
import bg from "../../assets/wallhaven-zmjd7o-min.jpg";
import bg2 from "../../assets/Screenshot_۲۰۲۴۰۳۰۱_۲۳۵۳۵۳_Gallery.jpg";

import LightImage from "../../assets/3132.jpg"

const Home = () => {


    const { statusMode } = useContext(MainContext)


    // for text-transition
    const [index, setIndex] = useState(0);


    const NameAn = useRef(null);
    const BioAn = useRef(null);


    // configuring animation for when rendering

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: .1
    });


    const string = [
        "توسعه دهنده",
        "برنامه نویس",
        "موزیسین",
        "مدرس"
    ];


    useEffect(() => {

        const AnimationName = new Typed(NameAn.current, {
            strings: ["علیرضا سپه وند"],
            startDelay: 2000,
            typeSpeed: 90,
            showCursor: false,
        })

        const AnimationBio = setInterval(() => {
            setIndex(preIndex => preIndex + 1)
        }, 3000)

        return () => {
            AnimationName.destroy()
            clearInterval(AnimationBio);
        }

    }, [])


    // theme mode status
    
    const color = {
        xs: "whitesmoke",
        md: "text.primary"
    }


    return (
        <>
            <HelmetOption />
            <Box sx={{
                backgroundImage: {
                    xs: `url(${bg})`,
                    md: statusMode === "dark" ? `url(${bg3})` : `url(${LightImage})`,
                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2 }}

                >
                    <Avatar variant="circular" src={bg2} sx={{
                        width: 300,
                        height: 300,
                        boxShadow: 5,
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "none",
                            lg: "none",
                            xl: "none"
                        }
                    }} />

                    <Box className="particle" />
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>


                        <Typography variant="h4" ref={NameAn} color={color} sx={{
                            fontSize: {
                                xs: "3rem",
                                md: "5rem"
                            }
                        }}
                        >
                            {"{{ علیرضا سپه وند }}"}
                        </Typography>

                    </Box>

                    <Box component="div" sx={{
                        display: "flex", justifyContent: "center", mt: 3
                    }}>
                        <Typography variant="h4" color={color} ref={BioAn} sx={{
                            textDecoration: "underline whitesmoke", mx: 1

                        }}>
                            #
                        </Typography>
                        <TextTransition springConfig={presets.wobbly} >
                            <Typography variant="h4" color={color} sx={{
                                textDecoration: "underline whitesmoke"
                            }}>
                                {string[index % string.length]}
                            </Typography>
                        </TextTransition>
                    </Box>
                </motion.div >
            </Box >
        </>

    )
};

export default Home;