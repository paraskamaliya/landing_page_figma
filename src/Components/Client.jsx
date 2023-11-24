import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import people from "../assets/member.png"
import building from "../assets/build.png"
import hand from "../assets/hands.png"
const Client = () => {
    return <div>
        <h1 className="text-4xl font-medium text-D_grey m-2">Our Clients</h1>
        <p className="text-md text-L_grey">We have been working with some Fortune 500+ clients</p>
        <div className="flex align-middle justify-around m-10">
            <div>
                <img src={logo1} alt="" />
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>
            <div>
                <img src={logo3} alt="" />
            </div>
            <div>
                <img src={logo4} alt="" />
            </div>
            <div>
                <img src={logo5} alt="" />
            </div>
            <div>
                <img src={logo3} alt="" />
            </div>
        </div>
        <h1 className="text-4xl font-medium text-D_grey m-2">Manage your entire community</h1>
        <h1 className="text-4xl font-medium text-D_grey m-2">in a single system</h1>
        <p className="text-md text-L_grey">Who is Nextcent suitable for?</p>
        <div className="flex justify-evenly align-middle text-center m-[2%] w-[100%] gap-[5%]">
            <div className="w-[25%] p-[2%] shadow-md rounded">
                <img src={people} alt="" className="m-auto w-30" />
                <h2 className="text-3xl font-medium text-D_grey m-2">Membership Organisations</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="w-[25%] p-[2%] shadow-md rounded">
                <img src={building} alt="" className="m-auto w-30" />
                <h2 className="text-3xl font-medium text-D_grey m-2">National Associations</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="w-[25%] p-[2%] shadow-md rounded">
                <img src={hand} alt="" className="m-auto" />
                <h2 className="text-3xl font-medium text-D_grey m-2">Clubs And Groups</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
}
export default Client;