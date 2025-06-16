import propTypes from "prop-types"

const HouseRow = ({house: {address, country,price}}) => {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{price}</td>
        </tr>
    )
}

HouseRow.propTypes = {
    house: propTypes.shape({
        address: propTypes.string,
        country: propTypes.string,
        price: propTypes.string,
    })
}

export default HouseRow
