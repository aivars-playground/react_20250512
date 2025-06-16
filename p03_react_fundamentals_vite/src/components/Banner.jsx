import logo from "../assets/GloboLogo.png"

const Banner = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>This is a banner component</div>
        </header>
    )
}

export default Banner
