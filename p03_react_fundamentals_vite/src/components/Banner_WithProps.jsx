import logo from "../assets/GloboLogo.png"
import {logo as logoClass} from "./Banner.module.css"
import propTypes from "prop-types"

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner_WithProps = (props) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} className={logoClass} alt="logo" />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {props.headerText}
      </div>
    </header>
  );
}

Banner_WithProps.propTypes = {
    headerText: propTypes.string.isRequired,
}

export default Banner_WithProps;