'use client'
import {useState} from "react";
export default function Home() {

    function ListItems({ints, items}) {
        return (
            <>
                <button onClick={addValue}>Add Item</button>
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

    function addValue() {
        const newValue = Math.max(...ints) + 1
        setInts([...ints, newValue])
    }

    return (
        <ul>
            <ListItems ints={ints} addValue={addValue}/>
        </ul>
    )
}
