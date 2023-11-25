import market1 from "../assets/market1.png"
import market2 from "../assets/market2.png"
import market3 from "../assets/market3.png"
import more from "../assets/readmore.png"
const Market = () => {
    return <div className="w-[100%] p-[3%]">
        <div className="w-[80%] m-auto">
            <div className="w-[60%] m-auto">
                <h1 className="text-4xl text-D_grey font-medium m-[1%] text-center">Caring is the new marketing</h1>
                <p className="text-lg text-L_grey m-[1%] text-center">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className="flex gap-[2%] m-[1%] h-[100%] pb-[6%]">
                <div className="w-[33%] relative h-[100%]">
                    <img src={market1} alt="" className="w-[100%] h-[100%]" />
                    <div className="w-[90%] m-auto bg-Silver rounded-lg shadow-lg absolute left-[4.5%] bottom-[-20%]">
                        <h1 className="text-2xl font-medium text-L_grey mb-[2%] text-center">Creating Streamlined Safeguarding Processes with OneRen</h1>
                        <img src={more} alt="" className="m-auto" />
                    </div>
                </div>
                <div className="w-[33%] relative h-[100%]">
                    <img src={market2} alt="" className="w-[100%] h-[100%]" />
                    <div className="w-[90%] m-auto bg-Silver rounded-lg shadow-lg absolute left-[4.5%] bottom-[-20%]">
                        <h1 className="text-2xl font-medium text-L_grey mb-[2%] text-center">What are your safeguarding responsibilities and how can you manage them?</h1>
                        <img src={more} alt="" className="m-auto" />
                    </div>
                </div>
                <div className="w-[33%] relative h-[100%]">
                    <img src={market3} alt="" className="w-[100%] h-[100%]" />
                    <div className="w-[90%] m-auto bg-Silver rounded-lg shadow-lg absolute left-[4.5%] bottom-[-20%]">
                        <h1 className="text-2xl font-medium text-L_grey mb-[2%] text-center">Revamping the Membership Model with Triathlon Australia</h1>
                        <img src={more} alt="" className="m-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Market;