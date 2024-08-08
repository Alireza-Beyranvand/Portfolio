import { useEffect, useState } from "react";
import HelmetOption from "../../../helpers/HelmetOption";
import { ConnectWithoutContactRounded, } from "@mui/icons-material";
import { devCallMe } from "../../../constants/details";
import CustomizeDivider from "../../../components/common/CustomizeDivider";
import DevCall from "./DevCall";
import "../../../constants/style.css";

const ContactContainer = () => {


    // for slideOption

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, [])



    return (
        <>
            <HelmetOption title="ارتباط با من" />
            <CustomizeDivider
                divider={true}
                label="ارتباط با من"
                borderC="primary.main"
                color="primary"
                dividerVarinat="fullWidth"
                textColor="text.primary"
                textVariant="body2"
                chipIcon={<ConnectWithoutContactRounded />}
                loading={loading}
                dir="left"
                delay="400"
                sx={{ px: 14, my: 4 }}
            />

            <CustomizeDivider
                divider={false}
                label="بیا با هم صحبت کنیم دوست من !"
                textColor="text.primary"
                textVariant="body1"
                loading={loading}
                dir="down"
                delay="100"
                sx={{ p: 1, mt: 5 }}
                className="textAnimation"
            />
            <DevCall loading={loading} devCallMe={devCallMe}/>
        </>
    )
};

export default ContactContainer;