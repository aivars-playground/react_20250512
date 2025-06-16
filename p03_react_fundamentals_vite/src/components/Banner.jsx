import logo from "../assets/GloboLogo.png"

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="col-7">
                Providing houses all over the world
            </div>
        </header>
    );
}

export default Banner;
