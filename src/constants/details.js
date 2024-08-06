import {
    Coffee,
    CheckCircle,
    HourglassEmpty,
    SchoolRounded,
    Description
} from "@mui/icons-material";

// image for (document)
import ICDL from "../assets/documentImage/39640191.jpg";
import Fixing from "../assets/documentImage/39640192.jpg";



// img for call me

import LinkedIn from "../assets/LinkedIn_logo_initials.png.webp";
import GitHub from "../assets/Octicons-mark-github.svg.png";
import Email from "../assets/gmailpng.parspng.com-6.png";
import Insatagram from "../assets/Instagram_logo_2022.svg.webp";
import Telegram from "../assets/Telegram_logo.svg.webp";


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
        logo: Email
    }, {
        name: "LinkedIn",
        url: "alireza-beyranvand",
        logo: LinkedIn
    }, {
        name: "GitHub",
        url: "Alireza-Beyranvand",
        logo: GitHub
    }, {
        name: "Instagram",
        url: "Alireza_.beyranvand._",
        logo: Insatagram
    },
    {
        name: "Telegram",
        url: " @Alirezaspbs ",
        logo: Telegram
    },
]