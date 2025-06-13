'use client'
export default function Home() {

    function ListItems() {

        const ints = [1,2,3]

        return (
            <>
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

    return (
        <ul>
            <ListItems />
        </ul>
    )
}
