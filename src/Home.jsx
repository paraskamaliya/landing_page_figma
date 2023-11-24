import Client from "./Components/Client";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import More from "./Components/More";
import Navbar from "./Components/Navbar";

const Home = () => {
    return <div>
        <Navbar />
        <Hero />
        <Client />
        <More />
        <Help />
    </div>
}
export default Home;