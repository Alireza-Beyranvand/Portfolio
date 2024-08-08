import { useContext, useEffect, useRef, useState } from "react";
import MainContext from "../../../context/index";
import { motion } from "framer-motion";

import SideOption from "../../../helpers/SlideOption";

import { useInView } from "react-intersection-observer";
import { Box, Avatar } from "@mui/material";
import { DarkImage, LightImage, BlueImage } from "../../../assets/backgroundImg/index";
import { White } from "../../../assets/MyImages/index";
import HelmetOption from "../../../helpers/HelmetOption";
import Typed from "typed.js";
import Name from "./Name";
import TextInfo from "./TextInfo";
import "../../../constants/style.css"

const HomeContainer = () => {

    // status themeMode
    const { statusMode } = useContext(MainContext);

    // ref for textTransition
    const NameAn = useRef(null);
    const BioAn = useRef(null);


    // states 
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false);


    // configuring animation for when rendering

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: .1
    });


    useEffect(() => {

        setLoading(true);

        const AnimationName = new Typed(NameAn.current, {
            strings: ["علیرضا سپه وند"],
            startDelay: 2000,
            typeSpeed: 90,
            showCursor: false,
        });

        const AnimationBio = setInterval(() => {
            setIndex(preIndex => preIndex + 1)
        }, 3000);

        return () => {
            setLoading(false);
            AnimationName.destroy()
            clearInterval(AnimationBio);
        };

    }, [])


    // theme mode status
    const color = {
        xs: "whitesmoke",
        md: "text.primary"
    }



    return (
        <>
            <HelmetOption />

            <SideOption start={loading} dir="down" delay="400">

                <Box sx={{
                    backgroundImage: {
                        xs: `url(${BlueImage})`,
                        md: statusMode === "dark" ? `url(${DarkImage})` : `url(${LightImage})`,
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
                    <Avatar variant="circular" src={White} sx={{
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
                    <Name NameAn={NameAn} color={color} />
                    <TextInfo index={index} color={color} BioAn={BioAn} />
                </Box >

            </SideOption>

        </>

    )
};

export default HomeContainer;