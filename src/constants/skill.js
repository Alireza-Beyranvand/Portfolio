
import {
    JsIcon,
    HtmlIcon,
    CssIcon,
    ReactIcon,
    GitIcon,
    BootstrapIcon,
    MUIIcon,
    ReduxIcon,
    ContextApiIcon,
    FigmaIcon
} from "../assets/icons"

export const devSkillsLanguage = {
    htmlSkills: {
        id: 0,
        name: "HTML",
        icon: HtmlIcon,
        color: "error",
        value: "90",
    },
    CssSkills: {
        id: 1,
        name: "CSS",
        icon: CssIcon,
        color: "info",
        value: "80",
    },
    JsSkills: {
        id: 2,
        name: "JavaScript",
        icon: JsIcon,
        color: "warning",
        value: "70",
    },
    ReactSkills: {
        id: 3,
        name: "React",
        icon: ReactIcon,
        color: "info",
        value: "90",
    },
    GitSkills: {
        id: 4,
        name: "Git",
        icon: GitIcon,
        color: "error",
        value: "85",
    },
};

export const devSkillsframework = {
    BootstrapSkills: {
        id: 5,
        name: "Bootstrap",
        icon: BootstrapIcon,
        color: "secondary",
        value: "80"
    },
    MUISkills: {
        id: 6,
        name: "MUI",
        icon: MUIIcon,
        color: "info",
        value: "75"
    },
    ReduxSkills: {
        id: 7,
        name: "Redux",
        icon: ReduxIcon,
        color: "secondary",
        value: "95"
    },
    ContextSkills: {
        id: 8,
        name: "ContextApi",
        icon: ContextApiIcon,
        color: "info",
        value: "100"
    },
    FigmaSkills: {
        id: 9,
        name: "Figma",
        icon: FigmaIcon,
        color: "error",
        value: "50"
    },
}

// function for changing Values progress (Animation)

export const ProgresAnimation = (setState, value) => {
    setState(preState => Math.min(preState + 10, value));
};