import propTypes from "prop-types"
import currencyFormatter from "../helpers/currencyFormatter.jsx";
// import React from "react";

const HouseRow = ({house: {address, country, price}}) => {
    let priceCell;
    if (price < 500000)
        priceCell =  <td>{currencyFormatter.format(price)}</td>
    else
        priceCell = <td className="text-primary">{currencyFormatter.format(price)}</td>

    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            {priceCell}
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
