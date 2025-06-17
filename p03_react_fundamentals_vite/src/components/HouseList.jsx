// import {useEffect, useState} from "react";
import HouseRow from "./HouseRow.jsx";
//import house from "./House.jsx";
import useHouses from "../hooks/useHouses.js";
import LoadingIndicator from "./LoadingIndicator.jsx";
import loadingStatus from "../helpers/loadingStatus.js";
import {useEffect, useRef} from "react";

const HouseList = ({selectHouse}) => {

    const houseListCount = useRef(0)

    useEffect(() => {
        houseListCount.current++
        console.log("---HouseList times: ", houseListCount.current)
    })

    const {houses,setHouses, loadingState}  = useHouses();

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 10,
                address: "Hauptstraße 1",
                country: "DE",
                price: 30000000,
            }
        ])
    }

    if (loadingState !== loadingStatus.loaded) {
        console.log("---HouseList loading screen")
        return <LoadingIndicator loadingState={loadingState} />
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses in market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asked Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(house =>
                        <HouseRow selectHouse={selectHouse} house={house} key={house.id} />)
                    }
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add House
            </button>
        </>
    )
}

export default HouseList
