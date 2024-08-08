
import Grid from "@mui/material/Unstable_Grid2";
import Skills from "../../../components/common/Skills";


const SkillAbout = ({devSkillsLanguage}) => {


    // loop on devSkills {object}
    const devLanguageLoop = Object.values(devSkillsLanguage);


    return (
        <Grid container sx={{
            display: "flex",
            justifyContent: "space-evenly", mt: 6,
        }}>
            {devSkillsLanguage && devLanguageLoop.map((ds) => (
                <Skills value={ds.value}
                    icon={ds.icon}
                    color={ds.color}
                    name={ds.name} />
            ))}
        </Grid>
    )
};

export default SkillAbout;