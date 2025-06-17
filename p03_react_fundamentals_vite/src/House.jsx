
// eslint-disable-next-line react/prop-types
import currencyFormatter from "./helpers/currencyFormatter.jsx";

// eslint-disable-next-line react/prop-types
const House = ({house}) => {


  // eslint-disable-next-line react/prop-types
  const {country, photo, description, address, price} = house;

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              photo ? `./houseImages/${photo}.jpeg`
                : "./defaultphoto.png"
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
