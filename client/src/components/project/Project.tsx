import Footer from "../Footer";
import NavBar from "../Navbar";

const Project = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar selected="project"/>
        <div className="bg-ws-orange h-full">
          <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">
            Project Page
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Project;
