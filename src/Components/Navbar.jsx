import logo from "../assets/Logo.png"
const Navbar = () => {
    return <div className="flex justify-around p-[0.5%] align-middle bg-Silver">
        <div className="flex justify-evenly align-middle w-30 gap-2">
            <img src={logo} alt="" className="m-auto w-70" />
            {/* <img src={logo} alt="" className="m-auto w-70" /> */}
        </div>
        <div className="flex justify-evenly align-middle">
            <a href="#" className="m-auto mr-5 ml-5 text-lg">Home</a>
            <a href="#" className="m-auto mr-5 ml-5 text-lg">Service</a>
            <a href="#" className="m-auto mr-5 ml-5 text-lg">Feature</a>
            <a href="#" className="m-auto mr-5 ml-5 text-lg">Product</a>
            <a href="#" className="m-auto mr-5 ml-5 text-lg">Testimonial</a>
            <a href="#" className="m-auto mr-5 ml-5 text-lg">FAQ</a>
        </div>
        <div className="flex justify-evenly">
            <button className="m-5 text-Shade1">Login</button>
            <button className="m-5 bg-Shade1 pl-5 pr-5 pt-2 pb-2 rounded text-Silver">Sign Up</button>
        </div>
    </div>
}
export default Navbar;