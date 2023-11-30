import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
