import { useEffect, useState } from "react";
import PageContainer from "./PageContainer";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Pages from '../pages/Pages';
import SideBarContainer from "./SidebarContainer";
import { SideBar } from "../components/Sidebar/index"
import MainLayout from '../layout/MainLayout';
import MainContext from "../context/index";
import { DrawerActionButton } from "../components/Drawer";
import { Home, About, Resume } from "../pages/index";


const AppContainer = () => {


  const theme = useTheme();
  const showSidebarinMd = useMediaQuery(theme.breakpoints.up("md"))

  useEffect(() => {
    if (showSidebarinMd) {
      setDrawerOpen(false);
    }
  }, [showSidebarinMd])


  const [Numberpages, setNumberPage] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setNumberPage(newValue)
  }


  return (
    <>
      <MainContext.Provider value={{
        handlePageNumber,
        Numberpages,
        drawerOpen,
        setDrawerOpen
      }}>

        <MainLayout>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <DrawerActionButton />
          <PageContainer >
            <Pages Numberpages={Numberpages} index={0}>
              <Home />
            </Pages>
            <Pages Numberpages={Numberpages} index={1}>
              <About />
            </Pages>
            <Pages Numberpages={Numberpages} index={2}>
              <Resume />
            </Pages>
            <Pages Numberpages={Numberpages} index={3}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نظرات
              </Typography>
            </Pages>
            <Pages Numberpages={Numberpages} index={4}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نمونه کار ها
              </Typography>
            </Pages>
            <Pages Numberpages={Numberpages} index={5}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                ارتباط با من
              </Typography>
            </Pages>
          </PageContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  )
};
export default AppContainer;