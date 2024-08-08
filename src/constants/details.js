import {
    Coffee,
    CheckCircle,
    HourglassEmpty,
    SchoolRounded,
    Description
} from "@mui/icons-material";

// image for (document)
import { ICDL, Fixing } from '../assets/documentImage/index';


// img for call me
import {
    LinkedIn,
    GitHub,
    Email,
    Instagram,
    Telegram
} from "../assets/LogoSocialMedia"


// work info

export const devWorkInfo = [
    {
        icon: <Coffee />,
        color: "#A67C5D",
        total: 892,
        description: "قهوه های نوشیده شده"
    },
    {
        icon: <CheckCircle />,
        color: "##50C878",
        total: 5,
        description: "پروژه های تکمیل شده"
    }, {
        icon: <HourglassEmpty />,
        color: "warning",
        total: 2,
        description: "پروژه های تکمیل نشده"
    },
];


//education

export const devEdu = [
    {
        Evidence: "ریاضی و فیزیک",
        year: "1397-1398",
        school: "دبیرستان امیرکبیر",
        icon: <SchoolRounded />,
    },
    {
        Evidence: "مهندسی پلیمر",
        year: "اکنون",
        school: "دانشگاه لرستان",
        icon: <SchoolRounded />,
    },
];


// experiences

export const devExperiences = [
    {
        responsibility: "مسئول بخش کامپیوتر",
        company: "عرش پیمای افلاک",
        period: "1400 - 1402",
        icon: <Description />,
    },
    {
        responsibility: "مدیر , تحلیلگر بخش نرم افزار و توسعه دهنده فرانت",
        company: "شرکت فاوا موج",
        period: "اکنون",
        icon: <Description />,
    },
];


// document

export const devDocuments = [
    {
        DocumentName: "مدرک ICDL",
        level: "درجه 1",
        image: ICDL
    },
    {
        DocumentName: "مدرک تعمیرات کامپیوتر",
        level: "درجه 2",
        image: Fixing
    },
    {
        DocumentName: "تکنسین لوازم برقی",
        level: "درجه 1",
        image: Fixing
    },
];



export const devCallMe = [
    {
        name: "Email",
        url: "AlirezaSepahvand69",
        href: "mailto:AlirezaSepahvand69@gmail.com",
        logo: Email
    }, {
        name: "LinkedIn",
        url: "alireza-beyranvand",
        href: "https://www.linkedin.com/in/alireza-beyranvand-8b842a2ba/",
        logo: LinkedIn
    }, {
        name: "GitHub",
        url: "Alireza-Beyranvand",
        href: "https://github.com/Alireza-Beyranvand",
        logo: GitHub
    }, {
        name: "Instagram",
        url: "Alireza_.beyranvand._",
        href: "https://www.instagram.com/_.alireza_.beyranvand?igsh=MWFpMmVyM2dwbHoxdQ==",
        logo: Instagram
    },
    {
        name: "Telegram",
        url: " @Alirezaspbs ",
        href: "https://t.me/@Alirezaspbs",
        logo: Telegram
    },
]