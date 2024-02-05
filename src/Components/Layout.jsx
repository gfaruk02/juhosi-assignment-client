import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="my-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;