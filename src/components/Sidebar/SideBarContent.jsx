import { Divider } from "@mui/material";
import { grey } from "@mui/material/colors";

import {SideBarFooter ,SideBarTabs, SideBarHeader } from "./index"

const SideBarContent = () => {


    return (
        <>
            <SideBarHeader />
            <SideBarTabs/>
            <Divider color={grey[800]} variant="middle" />
            <SideBarFooter/>
        </>
    )
};




export default SideBarContent;