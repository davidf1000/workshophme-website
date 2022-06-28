import { useState } from "react";
import { Article } from "../../article/article.types";
import AdminFooter from "../AdminFooter";
import NavAdmin from "../NavAdmin";
import SearchBar from "../SearchBar";
import TopCover from "../TopCover";

const ArticleTable = (): JSX.Element => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [wordSearch, setWordSearch] = useState<string>('');

  return (<div className="flex flex-col h-screen justify-between">
    <div className="flex flex-col">
      <NavAdmin selected='pickup' />
      <TopCover title='Article' desc='List of Articles from WS medium' />
    </div>
    <div className="bg-white h-full mx-auto">
      <SearchBar wordSearch={wordSearch} setWordSearch={setWordSearch} placeholder={"Cari Artikel"} />
    </div>
    <AdminFooter />
  </div>);
};

export default ArticleTable;
