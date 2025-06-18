import "./App.css"
import Banner from "./components/Banner.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import House from "./components/House.jsx";
import HouseList from "./components/HouseList.jsx";


function App() {

    return (        <BrowserRouter>
        <Banner>
            <div>Providing houses all over the world</div>
        </Banner>
        <Routes>
            <Route index element={<HouseList/>}/>
            <Route path="house/:id" element={<House/>}/>
        </Routes>
    </BrowserRouter>

    )
}

export default App
