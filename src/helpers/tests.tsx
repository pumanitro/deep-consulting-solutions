import {CoreTheme} from "../globals/Themes/CoreTheme";
import {BrowserRouter} from "react-router-dom";
import {GeoRedirection} from "../globals/GeoRedirection/GeoRedirection";
import {CenteredApps} from "../globals/CenteredApp/CenteredApp";
import {GlobalStyles} from "../globals/GlobalStyles/GlobalStyles";
import {ToastContainer} from "react-toastify";
import {FavoriteCitiesContextProvider} from "../globals/FavoritesContext/FavoritesContext";
import {ThemeProvider} from "styled-components";
import React, {FC} from "react";

export const ContextProviders: FC<any> = ({children}) => {
    return (
        <ThemeProvider theme={CoreTheme}>
            <BrowserRouter>
                <GeoRedirection>
                    <CenteredApps>
                        <GlobalStyles />
                        <ToastContainer />
                        <FavoriteCitiesContextProvider>
                            {children}
                        </FavoriteCitiesContextProvider>
                    </CenteredApps>
                </GeoRedirection>
            </BrowserRouter>
        </ThemeProvider>
    )
}
