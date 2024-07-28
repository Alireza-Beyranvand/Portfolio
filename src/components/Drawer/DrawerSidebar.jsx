import { Drawer } from "@mui/material";

import SidebarContent from "../Sidebar/SideBarContent";

import { useContext } from "react";
import MainContext from "../../context/index";

const DrawerSidebar = () => {


    const { drawerOpen, setDrawerOpen} = useContext(MainContext)


    return (
        <Drawer
            dir="rtl"
            open={drawerOpen} 
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300
                },
                display: {
                    xs: "block",
                    sm: "black",
                    md: "none",
                    xl: "none"
                }
            }}

        >
            <SidebarContent />
        </Drawer>
    )
};


export default DrawerSidebar;