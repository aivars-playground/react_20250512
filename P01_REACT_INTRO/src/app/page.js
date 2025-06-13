'use client'
import {useState} from "react";
export default function Home() {

    function ListItems({items, addItem}) {
        const increment = 3
        return (
            <>
                <button onClick={() => addItem(increment)}>Add Item</button>
                {
                    items.map(id => {
                        return (
                            <li key={id}>{id}</li>
                        )
                    })
                }
            </>
        )
    }

    const [ints,setInts] = useState([1,2,3])

    function addIntValue(incrementByValue) {
        const newValue = Math.max(...ints) + incrementByValue
        setInts([...ints, newValue])
    }

    return (
        <ul>
            <ListItems items={ints} addItem={addIntValue}/>
        </ul>
    )
}
