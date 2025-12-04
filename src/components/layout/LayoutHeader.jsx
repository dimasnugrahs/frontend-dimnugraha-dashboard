// import Navbar from "./Navbar";
// import Footer from "./Footer";

// header and footer will be updated next

function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}

      <main className="min-h-screen overflow-x-hidden">{children}</main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
