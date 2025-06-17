// import {useEffect, useState} from "react";
import HouseRow from "./HouseRow.jsx";
import {useEffect, useRef, useState} from "react";

//v19 apprach - needs caching library
// const fetchHouses = fetch("https://localhost:4000/house")
//     .then(response => response.json())

const HouseList = ({selectHouse}) => {
    const initialData = [] //use(fetchHouses)
    const [houses, setHouses] = useState(initialData)
    const rerenderCounter = useRef(0)

    //PRE 19 approach,  //<Suspense fallback={<h3>loading...</h3>}> does not understand this...
    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("https://localhost:4000/house")
            const houses = await response.json();
            setHouses(houses)
        }
        fetchHouses()
        rerenderCounter.current++
        console.log("---effect called times: ", rerenderCounter.current)
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
