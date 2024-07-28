
import {
    HomeOutlined, StickyNote2Outlined,
    MessageOutlined, CodeOutlined, ContactSupportOutlined,
    PermIdentityOutlined
} from "@mui/icons-material"




export const tabs = () => {

    const tb = [
        { label: "صفحه اصلی", icon: <HomeOutlined /> },
        { label: "درباره من", icon: <PermIdentityOutlined /> },
        { label: "رزومه من", icon: <StickyNote2Outlined /> },
        { label: "نظرات", icon: <MessageOutlined /> },
        { label: "نمونه کار ها", icon: <CodeOutlined /> },
        { label: "ارتباط با من", icon: <ContactSupportOutlined /> },
    ];

    return tb;
}

