import Footer from "../Footer";
import NavBar from "../Navbar";

const Shop = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <div className="bg-ws-orange h-full">
          <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">Shop Page</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
