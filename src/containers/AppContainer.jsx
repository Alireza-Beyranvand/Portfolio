import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import {dataPages} from "../constants/dataPages";
import MainLayout from '../layout/MainLayout';
import Pages from '../pages/Pages';
import { SideBar } from "../components/Sidebar/index"
import SideBarContainer from "./SidebarContainer";
import { DrawerActionButton } from "../components/Drawer";
import PageContainer from "./PageContainer";
import MainContext from "../context/index";




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
            {dataPages &&
              dataPages.map((page, index) =>
              (<Pages key={index}
                Numberpages={Numberpages}
                index={index}>
                {page.component}
              </Pages>))}
          </PageContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  )
};
export default AppContainer;