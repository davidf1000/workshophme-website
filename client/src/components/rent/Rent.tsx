import Footer from "../Footer";
import NavBar from "../Navbar";

const Rent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar selected="rent" />
        <div className="bg-ws-orange h-full">
          <div className="flex flex-col max-w-7xl">
            <h1 className="font-sans text-4xl">
              Rent Page
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rent;
