import propTypes from "prop-types"
import currencyFormatter from "../helpers/currencyFormatter.jsx";
// import React from "react";

const HouseRow = ({house, selectHouse}) => {
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price &&
                <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                    {currencyFormatter.format(house.price)}
                </td>
            }
        </tr>
    )
}

HouseRow.propTypes = {
    house: propTypes.shape({
        address: propTypes.string,
        country: propTypes.string,
        price: propTypes.numeric,
    })
}

// const HouseRowMemo = React.memo(HouseRow)
// export {HouseRowMemo}

export default HouseRow
