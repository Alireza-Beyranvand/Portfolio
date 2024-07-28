import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Avatar, Box, Typography } from "@mui/material";
import bg3 from "../../assets/1.jpg"
import bg from "../../assets/wallhaven-zmjd7o-min.jpg";
import bg2 from "../../assets/Screenshot_۲۰۲۴۰۳۰۱_۲۳۵۳۵۳_Gallery.jpg";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextTransition, { presets } from "react-text-transition";
import "../../constants/style.css"
import HelmetOption from "../../helpers/HelmetOption";


const Home = () => {


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
            startDelay: 3200,
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


    return (
        <>
            <HelmetOption />
            <Box sx={{
                backgroundImage: {
                    xs: `url(${bg})`,
                    sm: `url(${bg})`,
                    md: `url(${bg3})`,
                    lg: `url(${bg3})`,
                    xl: `url(${bg3})`
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
                        <Typography variant="h4" sx={{ mx: 1 }}
                            color="tomato">
                            {"{{"}
                        </Typography>

                        <Typography variant="h4" ref={NameAn} color="#A8E6CE" sx={{
                            textShadow: "2px 2px 4px #81B29A , 2px 2px 4px #81B29A"
                        }}
                        >
                            {"{{علیرضا سپه وند}}"}
                        </Typography>

                        <Typography variant="h4" sx={{ mx: 1 }}
                            color="tomato">
                            {"}}"}
                        </Typography>
                    </Box>

                    <Box component="div" sx={{
                        display: "flex", justifyContent: "center", mt: 3
                    }}>
                        <Typography variant="h4" color="whitesmoke" ref={BioAn} sx={{
                            textDecoration: "underline whitesmoke", mx: 1

                        }}>
                            #
                        </Typography>
                        <TextTransition springConfig={presets.wobbly} >
                            <Typography variant="h4" color="whitesmoke" sx={{
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