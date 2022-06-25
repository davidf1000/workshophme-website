import Footer from "../Footer";
import NavBar from "../Navbar";
import ArticleCard from "./ArticleCard";

const Article = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="project" />
        <div className="flex  h-full w-full mb-auto">
          <div className="flex flex-col max-w-6xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Article
            </h1>
            <p className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Daftar technical article seputar dunia IT dan elektronik yang telah di-publish oleh Workshop HME pada platform medium.
            </p>
            <div className="flex flex-col justify-start items-center mx-10 mb-8 mt-10">
                <ArticleCard />
                <ArticleCard />

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
