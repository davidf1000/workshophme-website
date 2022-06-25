import Footer from "../Footer";
import NavBar from "../Navbar";

const Article = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar selected="article" />
        <div className="bg-ws-orange h-full">
          <h1 className="font-sans text-4xl font-bold font-black animate-in slide-in-from-left">Article Page</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Article;