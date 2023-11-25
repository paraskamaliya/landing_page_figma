import login from "../assets/pana.png"
const Login = () => {
    return <div className="w-[100%]">
        <div className="w-[90%] m-auto flex gap-[5%] p-[2%]">
            <div className="w-[40%] flex text-end justify-end">
                <img src={login} alt="" />
            </div>
            <div className="w-[50%] text-left self-center p-[2%]">
                <h1 className="text-4xl font-semibold text-black mb-[2%]">How to design your site footer like we did</h1>
                <p className="mb-[1%] mt-[1%] text-L_grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas itaque amet provident asperiores reprehenderit vero earum modi, placeat suscipit dolore, perferendis quas impedit facere! Veritatis explicabo molestiae necessitatibus architecto repellendus voluptatum cupiditate ut ea asperiores rerum odio est minima nesciunt voluptate aperiam atque provident aliquam recusandae itaque, magni laboriosam fugiat! Unde obcaecati tenetur excepturi laboriosam dolorem aliquid officiis in?</p>
                <button className="pl-[5%] pr-[5%] pt-[2%] pb-[2%] mt-[2%] bg-Shade1 rounded text-Silver">Learn More</button>
            </div>
        </div>
    </div >
}
export default Login;