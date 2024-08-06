import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";

import { tabs } from "../data/tabsDataSidear";
import MainContext from "../../context/index";
import { useTheme } from "@mui/material/styles"

const SideBarTabs = () => {

    const { Numberpages, handlePageNumber, setDrawerOpen } = useContext(MainContext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }

    // data sheets for display
    const DataTabs = tabs();


    // status theme mode

    const theme = useTheme();
    const statusMode = theme.palette.mode;


    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={Numberpages}
            onChange={handlePageNumber}
            onClick={() => setDrawerOpen(false)}
            sx={{ mb: 1, mt: -.7 }}
            indicatorColor={statusMode === "dark" ? "primary" : "secondary"}
            textColor={statusMode === "dark" ? "primary" : "secondary"}>

            {DataTabs.map((tab, index) =>
                <Tab key={index} label={tab.label} icon={tab.icon} iconPosition="start"
                    sx={{
                        mb: 1,
                        "&.MuiTab-root": {
                            minHeight: 20,
                            backgroundColor: statusMode === "light" ? grey[200] : grey[800],
                            borderRadius: 2,
                            mx: .5,
                            p: 1.5
                        }
                    }} {...tabProps(index)} />
            )}

        </Tabs>
    )
};

export default SideBarTabs;