// import Banner_WithProps from "./components/Banner_WithProps.jsx";
import "./App.css"
import Banner from "./components/Banner.jsx";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import navValues from "./navigation/navValues.js";
import {useCallback, useState} from "react";
import navigationContext from "./navigation/navigationContext";
import ComponentPicker from "./components/ComponentPicker.jsx";


function App() {

    const navigate = useCallback(
        (navTo, param) => setNav({ current: navTo, param, navigate }),
        []
    );

    const [nav, setNav] =
        useState({ current: navValues.home, navigate });

    return (
        <navigationContext.Provider value={nav}>
            <ErrorBoundary fallback="Something went wrong!">
                <Banner>
                    <div>Providing houses all over the world</div>
                </Banner>
                <ComponentPicker currentNavLocation={nav.current} />
            </ErrorBoundary>
        </navigationContext.Provider>
    );
}

export default App
