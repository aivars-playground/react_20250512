// import Banner_WithProps from "./components/Banner_WithProps.jsx";
import "./App.css"
import Banner from "./components/Banner.jsx";
import HouseList from "./components/HouseList.jsx";
import {Suspense} from "react";

function App() {

    return (
    <>
        {/*<Banner_WithProps headerText="Providing houses all over the world" />*/}
        <Banner>Providing houses all over the world</Banner>

        <Suspense fallback={<h3>loading...</h3>}>
            <HouseList/>
        </Suspense>
    </>
  )
}

export default App
