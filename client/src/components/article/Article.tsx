import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ARTICLES } from "../../graphql/articleQuery";
import { GetArticlesResponse } from "../../graphql/articleQuery.types";
import AlertCard from "../dashboard/basiccomponent/AlertCard";
import Footer from "../Footer";
import NavBar from "../Navbar";
import Spinner from "../Spinner";
import ArticleCard from "./ArticleCard";

const Article = (): JSX.Element => {
  const { loading, error, data } = useQuery<GetArticlesResponse>(GET_ARTICLES);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="article" />
        <main className="flex  h-full w-full mb-auto">
          <div className="flex flex-col max-w-6xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Article
            </h1>
            <h2 className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Daftar technical article seputar dunia IT dan elektronik yang telah di-publish oleh Workshop HME pada platform medium.
            </h2>
            <section className="flex flex-col justify-start items-center mx-10 mb-8 mt-10">
              {showAlert && error && <AlertCard data={{
                title: 'ERROR',
                desc: error.message,
                type: 'error'
              }} onClose={setShowAlert} />}

              {loading ? <Spinner /> :
                <>
                  {
                    data?.articles.map(article => (
                      <ArticleCard article={article} />
                    ))
                  }
                </>
              }
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Article;
