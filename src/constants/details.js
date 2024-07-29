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
        level: "درجه 2" ,
        image: Fixing
    },
    {
        DocumentName: "تکنسین لوازم برقی",
        level: "درجه 1",
        image: Fixing
    },
];