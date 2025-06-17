import {useEffect, useRef, useState} from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([])
    const rerenderCounter = useRef(0)

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

    return {houses, setHouses}
}

export default useHouses;