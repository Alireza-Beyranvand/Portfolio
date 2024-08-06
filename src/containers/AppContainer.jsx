import { useEffect, useState } from "react";
import PageContainer from "./PageContainer";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Pages from '../pages/Pages';
import SideBarContainer from "./SidebarContainer";
import { SideBar } from "../components/Sidebar/index"
import MainLayout from '../layout/MainLayout';
import MainContext from "../context/index";
import { DrawerActionButton } from "../components/Drawer";
import { Home, About, Resume, Comments, Contact } from "../pages/index";
import WorkSamples from "../pages/components/WorkSamples";

const AppContainer = () => {

  // initilize useTehem 
  const theme = useTheme();
  const showSidebarinMd = useMediaQuery(theme.breakpoints.up("md"))

  // desired by the user theme
  const favoriteUserTheme = useMediaQuery('(prefers-color-scheme : dark)')


  // states
  const [Numberpages, setNumberPage] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState("dark");



  // handle change number page
  const handlePageNumber = (event, newValue) => {
    setNumberPage(newValue)
  };


  // handle theme mode
  const handleThemeMode = () => {
    setMode((preMode) => preMode === "dark" ? "light" : "dark")
  };


  // responsive sidebar
  useEffect(() => {
    if (showSidebarinMd) {
      setDrawerOpen(false);
    }

  }, [showSidebarinMd]);


  // change theme by theme user
  useEffect(() => {
    setMode(favoriteUserTheme ? "dark" : "light")
  }, [favoriteUserTheme])


  return (
    <>
      <MainContext.Provider value={{
        handlePageNumber,
        Numberpages,
        drawerOpen,
        setDrawerOpen,
        handleThemeMode,
        statusMode: mode
      }}>

        <MainLayout mode={mode}>
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
              <WorkSamples />
            </Pages>
            <Pages Numberpages={Numberpages} index={4}>
              <Contact />
            </Pages>
          </PageContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  )
};
export default AppContainer;