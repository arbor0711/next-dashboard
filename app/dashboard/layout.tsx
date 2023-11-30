import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between gap-5 ">
      <div className="h-screen w-1/5 min-w-fit -bg--bgSoft	">
        <Sidebar />
      </div>

      <div className="w-full flex flex-col gap-5 mt-5 mr-5 ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
