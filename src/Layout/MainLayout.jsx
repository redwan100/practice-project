import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <Navbar />
      <Navbar />
      <Navbar />
      <div className="container lg:w-[80%] mx-auto">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
