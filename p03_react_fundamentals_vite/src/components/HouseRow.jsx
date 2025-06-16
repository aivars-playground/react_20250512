import propTypes from "prop-types"
import currencyFormatter from "../helpers/currencyFormatter.jsx";
import React from "react";

const HouseRow = ({house: {address, country,price}}) => {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
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

const HouseRowMemo = React.memo(HouseRow)
export {HouseRowMemo}

// export default HouseRow
