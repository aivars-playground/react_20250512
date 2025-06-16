// import HouseRow from "./HouseRow.jsx";
import {useState} from "react";
import {HouseRowMemo} from "./HouseRow.jsx";

const housesArray = [
    {
        id: 1,
        address: "highstreet 1",
        country: "UK",
        price: 10000000
    },
    {
        id: 2,
        address: "sráid ard 1",
        country: "IE",
        price: 20000000
    }
]

const HouseList = () => {

    const [houses, setHouses] = useState(housesArray)

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
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
                    {houses.map(house => <HouseRowMemo house={house} key={house.id} />)}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add House
            </button>
        </>
    )
}

export default HouseList
