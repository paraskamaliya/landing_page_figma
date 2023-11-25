import social from "../assets/Social Links.png"
import logo from "../assets/FooterLogo.png"
const Footer = () => {
    return <div className="w-[100%] bg-Black">
        <div className="w-[80%] m-auto p-[3%] flex gap-[10%] justify-center">
            <div className="w-[30%]">
                <img src={logo} alt="" className="bg-transparent mb-[9%]" />
                <h1 className="text-Silver mb-[2%]">Copyright © 2020 Nexcent ltd.</h1>
                <h1 className="text-Silver mb-[9%]">All rights reserved</h1>
                <img src={social} alt="" />
            </div>
            <div className="flex w-[80%] text-Silver gap-[15%] justify-center">
                <div>
                    <h1 className="text-xl font-medium mb-[15%]">Company</h1>
                    <p className="mb-[5%] font-light">About Us</p>
                    <p className="mb-[5%] font-light">Blog</p>
                    <p className="mb-[5%] font-light">Contact Us</p>
                    <p className="mb-[5%] font-light">Pricing</p>
                    <p className="mb-[5%] font-light">Testimonials</p>
                </div>
                <div>
                    <h1 className="text-xl font-medium mb-[15%]">Support</h1>
                    <p className="mb-[5%] font-light">Help center</p>
                    <p className="mb-[5%] font-light">Terms of service</p>
                    <p className="mb-[5%] font-light">Legal</p>
                    <p className="mb-[5%] font-light">Privacy policy</p>
                    <p className="mb-[5%] font-light">Status</p>
                </div>
                <div>
                    <h1 className="text-xl font-medium mb-[15%]">Stay up to date</h1>
                    <input type="text" placeholder="Your email address" className="rounded-lg p-[5%] bg-L_grey text-InputInner placeholder-Silver" />
                </div>
            </div>
        </div>
    </div>
}
export default Footer;