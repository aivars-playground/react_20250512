import logo from "../assets/GloboLogo.png"

export default Banner

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
