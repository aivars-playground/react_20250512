'use client'
import {useState} from "react";
export default function Home() {

    function ListItems({ints, items}) {
        const increment = 3
        return (
            <>
                <button onClick={() => addValue(increment)}>Add Item</button>
                {
                    ints.map(id => {
                        return (
                            <li key={id}>{id}</li>
                        )
                    })
                }
            </>
        )
    }

    const [ints,setInts] = useState([1,2,3])

    function addValue(incrementValue) {
        const newValue = Math.max(...ints) + incrementValue
        setInts([...ints, newValue])
    }

    return (
        <ul>
            <ListItems ints={ints} addValue={addValue}/>
        </ul>
    )
}
