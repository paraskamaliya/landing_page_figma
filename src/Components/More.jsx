import more from "../assets/more.png";
const More = () => {
    return <div className="flex w-[80%] m-auto align-middle">
        <div className="w-[40%]">
            <img src={more} alt="" />
        </div>
        <div className="text-left w-[50%] self-center">
            <h1 className="text-4xl font-medium text-D_grey mb-[1%]">The unseen of spending three years at Pixelgrade</h1>
            <p className="mt-[1%] font-200 text-L_grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque temporibus quia velit. Libero quasi modi neque similique incidunt veniam magnam cumque ab illum, aliquam porro autem. Dolorum animi excepturi nulla. Ad, dolor! Aperiam et possimus officiis pariatur perferendis atque reiciendis, delectus aut velit expedita dolorum cupiditate tempora quam illo maxime.</p>
            <button className="border rounded pr-[4%] pl-[4%] pt-[2%] pb-[2%] mt-[4%] bg-Shade1 text-Silver">Learn More</button>
        </div>
    </div>
}
export default More;