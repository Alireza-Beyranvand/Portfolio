import { Drawer, Box } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context/index";
import SidebarContent from "../Sidebar/SideBarContent";
import ModeActionButton from "../common/ModeActionButton";


const DrawerSidebar = () => {


    // switch open or close drawer
    const { drawerOpen, setDrawerOpen } = useContext(MainContext)


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
            <Box component="div" sx={{
                mb: {
                    xs: 6,
                    sm: 6,
                    md: 15
                },
                display: "flex", justifyContent: "center"
            }}>
                <ModeActionButton />
            </Box>
            <SidebarContent />
        </Drawer>
    )
};


export default DrawerSidebar;