import Footer from "../Footer";
import NavBar from "../Navbar";
import HomeContent from "./HomeContent";


const Landing = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar selected="home"/>
        <HomeContent />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
