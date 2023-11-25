import tesla from "../assets/tesla.png"
import logos from "../assets/custom_logos.png";
import ext from "../assets/ext_custom.png";
const Customers = () => {
    return <div className="w-[100%] bg-Silver p-[1%]">
        <div className="w-[80%] flex m-auto gap-[5%]">
            <div className="w-[30%]">
                <img src={tesla} alt="" />
            </div>
            <div className="w-[60%] text-left self-center">
                <p className="text-lg text-D_grey m-[1%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aut dolores. Eveniet eos enim, aspernatur, nihil atque totam dolorem debitis possimus similique excepturi tenetur culpa repellendus assumenda quas! Eligendi aliquid dolore veritatis. Libero a perspiciatis quibusdam amet. Quasi tempore eum deserunt quam qui, neque voluptates iusto? Eveniet, reiciendis nemo consequatur commodi voluptatum nulla earum, quas fugit quasi esse perferendis voluptatibus, voluptatem illo aperiam laborum voluptate tenetur sapiente sed. Eveniet, fuga.</p>
                <p className="text-xl text-Shade1 font-medium m-[1%]">Tim Smith</p>
                <p className="text-L_grey m-[1%]">British Dragon Boat Racing Association</p>
                <div className="flex gap-[3%] m-[1%] mt-[3%]">
                    <img src={logos} alt="" />
                    <img src={ext} alt="" />
                </div>
            </div>
        </div>
    </div>
}
export default Customers;