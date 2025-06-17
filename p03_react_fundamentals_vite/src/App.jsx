// import Banner_WithProps from "./components/Banner_WithProps.jsx";
import "./App.css"
import Banner from "./components/Banner.jsx";
import HouseList from "./components/HouseList.jsx";
import {Suspense, useState} from "react";
import House from "./components/House.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {

    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {
        console.log("setSelectedHouseWrapper selecting house:", house);
        setSelectedHouse(house)
    }

    return (
        <ErrorBoundary fallback="something is not right">
            {/*<Banner_WithProps headerText="Providing houses all over the world" />*/}
            <Banner>Providing houses all over the world</Banner>
            <Suspense fallback={<h3>loading...</h3>}>
                {
                    selectedHouse
                        ?<House house = {selectedHouse}/>
                        :<HouseList selectHouse={setSelectedHouseWrapper}/>
                }
            </Suspense>
        </ErrorBoundary>
  )
}

export default App
