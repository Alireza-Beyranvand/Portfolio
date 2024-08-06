import { createContext } from "react";


export default createContext({
    Numberpages: 0,
    handlePageNumber: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { },
    handleThemeMode: () => { },
    statusMode: "",
    loading: false,
    handleLoading: () => { },
});