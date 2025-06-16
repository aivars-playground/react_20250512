const houses = [
    {
        id: 1,
        address: "highstreet 1",
        country: "UK",
        price: 10000000
    },
    {
        id: 2,
        address: "sráid ard 1",
        country: "Ireland",
        price: 10000000
    }
]

const HouseList = () => {
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
                {houses.map(house => (
                      <tr key={house.id}>
                          <td>{house.address}</td>
                          <td>{house.country}</td>
                          <td>{house.price}</td>
                      </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default HouseList