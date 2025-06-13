'use client'
export default function Home() {

    function ListItems({ints}) {
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

    const ints = [1,2,3]

    return (
        <ul>
            <ListItems ints={ints} />
        </ul>
    )
}
