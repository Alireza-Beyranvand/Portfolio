
import Grid from "@mui/material/Unstable_Grid2";
import SlideOption from "../../../helpers/SlideOption";
import Skills from "../../../components/common/Skills";

const MoreSkillAbout = ({ loading , devSkillsframework}) => {

    // loop on devSkills {object}
    const devframeworkLoop = Object.values(devSkillsframework);


    return (
        <SlideOption dir="up" start={loading} dealy="900">
            <Grid container sx={{
                display: "flex",
                justifyContent: "space-evenly", mt: 6,
            }} >
                {devSkillsframework && devframeworkLoop.map((df) => (
                    <Skills value={df.value}
                        icon={df.icon}
                        color={df.color}
                        name={df.name} />
                ))}
            </Grid>
        </SlideOption>
    )
};

export default MoreSkillAbout;