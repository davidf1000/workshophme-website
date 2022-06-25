import Footer from "../Footer";
import NavBar from "../Navbar";

const Rent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="rent" />
        <div className="flex  h-full w-full mb-auto">
          <div className="flex flex-col max-w-7xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Rent
            </h1>
            <p className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Workshop HME menyediakan berbagai macam peralatan untuk melengkapi kebutuhan kegiatan maupun acara anda.
            </p>
            <div className="container max-w-4xl bg-slate-50 rounded-lg my-4">
              <div className="flex flex-col justify-start items-center my-4">
                <h2 className="font-sans font-semibold text-gray-800 text-xl">Form Peminjaman Alat</h2>
                <div className="flex flex-wrap justify-start items-center gap-2 ml-10 mr-8 mb-8 mt-10">


                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rent;
