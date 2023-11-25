import Client from "./Components/Client";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import More from "./Components/More";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Customers from "./Components/Customers";
import Market from "./Components/Market";
import Demo from "./Components/Demo";
import Footer from "./Components/Footer";

const Home = () => {
    return <div>
        <Navbar />
        <Hero />
        <Client />
        <More />
        <Help />
        <Login />
        <Customers />
        <Market />
        <Demo />
        <Footer />
    </div>
}
export default Home;