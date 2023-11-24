import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
const Help = () => {
    return <div className="w-[100%] bg-Silver p-[3%]">
        <div className="w-[80%] flex m-auto gap-[10%]">
            <div className="w-[40%] text-left self-center">
                <h2 className="text-4xl font-medium mt-[1%]">Helping a local</h2>
                <h2 className="text-4xl font-medium text-Shade1 mt-[1%]">business reinvent itself</h2>
                <p className="mt-[2%]">We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-auto w-[50%] gap-y-[15%] p-[5%] gap-[10%]">
                <div className="flex m-auto gap-[3%] w-[100%] items-center justify-center">
                    <img src={i1} alt="" />
                    <div className="w-[70%] text-left">
                        <h1 className="text-3xl font-medium">2,245,341</h1>
                        <h4 className="font-300 text-L_grey">Members</h4>
                    </div>
                </div>
                <div className="flex m-auto gap-[3%] w-[100%] items-center justify-center">
                    <img src={i2} alt="" />
                    <div className="w-[70%] text-left">
                        <h1 className="text-3xl font-medium">46,328</h1>
                        <h4 className="font-300 text-L_grey">Clubs</h4>
                    </div>
                </div>
                <div className="flex m-auto gap-[3%] w-[100%] items-center justify-center">
                    <img src={i3} alt="" />
                    <div className="w-[70%] text-left">
                        <h1 className="text-3xl font-medium">828,867</h1>
                        <h4 className="font-300 text-L_grey">Event Bookings</h4>
                    </div>
                </div>
                <div className="flex m-auto gap-[3%] w-[100%] items-center justify-center">
                    <img src={i4} alt="" />
                    <div className="w-[70%] text-left">
                        <h1 className="text-3xl font-medium">1,926,436</h1>
                        <h4 className="font-300 text-L_grey">Payments</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Help;