import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContactUltimate from "../components/common/FloatingContactUltimate";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {children}
      <Footer />

      {/* <FloatingWhatsApp /> */}
      {/* <FloatingCallButton /> */}
      <FloatingContactUltimate />
    </div>
  );
};

export default MainLayout;
