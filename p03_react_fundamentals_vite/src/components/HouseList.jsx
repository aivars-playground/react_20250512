import {useEffect, useState} from "react";
import HouseRow from "./HouseRow.jsx";

const HouseList = () => {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        const fetchHouses = async () => {
            console.log("-------fetchHouses...");
            const response = await fetch("https://localhost:4000/house")
            const houses = await response.json();
            setHouses(houses)
        }
        fetchHouses()
    }, [])

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
                    {houses.map(house => <HouseRow house={house} key={house.id} />)}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add House
            </button>
        </>
    )
}

export default HouseList
