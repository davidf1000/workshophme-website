import Footer from "../Footer";
import NavBar from "../Navbar";
import HomeContent from "./HomeContent";


const Landing = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start">
        <NavBar selected="home"/>
        <HomeContent />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
