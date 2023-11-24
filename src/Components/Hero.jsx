import hero from "../assets/Illustration.png"
import dot from "../assets/Dot.png"
const Hero = () => {
    return <div className="w-[100%] bg-Silver">
        <div className="w-[80%] m-auto flex p-[5%]">
            <div className="w-[65%] text-left self-center">
                <h1 className="text-6xl font-semibold m-[2%]">Lessons and insights</h1>
                <h1 className="text-6xl font-semibold text-Shade1 m-[2%]">from 8 years</h1>
                <p className="text-L_grey m-[2%] font-medium">Where to grow your business as a photographer: site or social media?</p>
                <button className="m-[2%] bg-Shade1 pt-[2%] pb-[2%] pr-[4%] pl-[4%] rounded text-Silver">Register</button>
            </div>
            <div className="w-[40%]">
                <img src={hero} alt="" />
            </div>
        </div>
        <img src={dot} alt="" className="m-auto p-[1%]" />
    </div>
}
export default Hero;