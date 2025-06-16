import propTypes from "prop-types"
import currencyFormatter from "../helpers/currencyFormatter.jsx";

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

export default HouseRow
